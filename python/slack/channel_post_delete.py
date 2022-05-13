import os, sys
import time
from slack_sdk import WebClient
from slack_sdk.errors import SlackApiError

def delete_all_messages(channel_id):
    client = WebClient(
        token=""
    )
    cursor = None
    idx = 0
    while True:
        try:
            response = client.conversations_history(
                channel=channel_id,
                cursor=cursor
            )
        except SlackApiError as e:
            sys.exit(
                e.response["error"]
            )

        if "messages" in response:
            for message in response["messages"]:
                idx = idx+1
                print(idx)
                time.sleep(1)
                try:
                    client.chat_delete(
                        channel=channel_id, ts=message["ts"]
                    )
                except SlackApiError as e:
                    sys.exit(e.response["error"])


        if "has_more" not in response or response["has_more"] is not True:
            # conversations_historyのレスポンスに["has_more"]が無かったり、has_moreの値がFalseだった場合、終了する。
            break

        if (
            "response_metadata" in response
            and "next_cursor" in response["response_metadata"]
        ):
            cursor = response["response_metadata"]["next_cursor"]
        else:
            break


if __name__ == "__main__":
    args = sys.argv
    if len(args) < 2:
        print("The first argument is required and must be a channel id.")
    else:
        delete_all_messages(args[1])
