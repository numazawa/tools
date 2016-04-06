// We will put dummy objects for event and context;
var event = {
    "created": "2016-04-05T11:21:11Z",
    "project": {
        "archived": false,
        "projectKey": "INFRA_MEDIA_T_IRAI",
        "name": "インフラ部 -メディアチーム作業依頼",
        "chartEnabled": true,
        "id": 60703,
        "subtaskingEnabled": true,
        "textFormattingRule": "markdown"
    },
    "id": 26316216,
    "type": 1,
    "content": {
        "summary": "テスト課題２",
        "key_id": 19,
        "customFields": [],
        "dueDate": "2016-04-08",
        "description": "これはテスト用の課題ですよーPart２",
        "priority": {
            "name": "中",
            "id": 3
        },
        "resolution": {
            "name": "",
            "id": null
        },
        "actualHours": null,
        "issueType": {
            "color": "#934981",
            "name": "OSアカウント",
            "displayOrder": 3,
            "id": 270947,
            "projectId": 60703
        },
        "milestone": [],
        "versions": [],
        "parentIssueId": null,
        "estimatedHours": null,
        "id": 3490073,
        "assignee": {
            "name": "mediba_沼沢一樹",
            "id": 74261,
            "roleType": 255,
            "lang": "null",
            "userId": "numasawa@mediba.jp"
        },
        "category": [],
        "startDate": "2016-04-05",
        "status": {
            "name": "未対応",
            "id": 1
        }
    },
    "notifications": [],
    "createdUser": {
        "nulabAccount": null,
        "name": "mediba_沼沢一樹",
        "mailAddress": null,
        "id": 74261,
        "roleType": 1,
        "userId": null
    }
};

// event = {
//     "created": "2016-04-05T12:16:01Z",
//     "project": {
//         "archived": false,
//         "projectKey": "INFRA_MEDIA_T_IRAI",
//         "name": "インフラ部 -メディアチーム作業依頼",
//         "chartEnabled": true,
//         "id": 60703,
//         "subtaskingEnabled": true,
//         "textFormattingRule": "markdown"
//     },
//     "id": 26319024,
//     "type": 1,
//     "content": {
//         "summary": "テスト課題３",
//         "key_id": 20,
//         "customFields": [],
//         "dueDate": "",
//         "description": "テスト課題３だよ！",
//         "priority": {
//             "name": "中",
//             "id": 3
//         },
//         "resolution": {
//             "name": "",
//             "id": null
//         },
//         "actualHours": null,
//         "issueType": {
//             "color": "#7ea800",
//             "name": "ASAP関連",
//             "displayOrder": 0,
//             "id": 270933,
//             "projectId": 60703
//         },
//         "milestone": [],
//         "versions": [],
//         "parentIssueId": null,
//         "estimatedHours": null,
//         "id": 3490470,
//         "assignee": null,
//         "category": [],
//         "startDate": "",
//         "status": {
//             "name": "未対応",
//             "id": 1
//         }
//     },
//     "notifications": [],
//     "createdUser": {
//         "nulabAccount": null,
//         "name": "mediba_沼沢一樹",
//         "mailAddress": null,
//         "id": 74261,
//         "roleType": 1,
//         "userId": null
//     }
// };
// 
// event = {
//     "created": "2016-04-05T12:12:08Z",
//     "project": {
//         "archived": false,
//         "projectKey": "INFRA_MEDIA_T_IRAI",
//         "name": "インフラ部 -メディアチーム作業依頼",
//         "chartEnabled": true,
//         "id": 60703,
//         "subtaskingEnabled": true,
//         "textFormattingRule": "markdown"
//     },
//     "id": 26318879,
//     "type": 3,
//     "content": {
//         "summary": "テスト課題２",
//         "key_id": 19,
//         "description": "これはテスト用の課題ですよーPart２\n課題更新したよ",
//         "comment": {
//             "id": 17075563,
//             "content": "コメントテスト"
//         },
//         "id": 3490073
//     },
//     "notifications": [],
//     "createdUser": {
//         "nulabAccount": null,
//         "name": "mediba_杉山元正",
//         "mailAddress": null,
//         "id": 77367,
//         "roleType": 1,
//         "userId": null
//     }
// };

var context = {
    // InvokeID may be unique invocation id for AWS Lambda.
    invokeid: 'string',
    // context.done() should be called for end of each invocation.
    // We would want to stub this.
    done: function(err,data){
        console.log(data);
        return;
    }
};
 
// Then we can load and run your function.
var lambdaFunction = require('./index');
lambdaFunction.handler(event,context);
