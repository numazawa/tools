var request = require('request');

var slackApi = '<your slack api>';
var channel = '<target channel>';
var botName = '<bot name>';

exports.handler = function(event, context) {
    var type = JSON.stringify(event.type);
    var label = '';
    switch (type) {
        case '1':
            label = '追加';
            break;
        case '2':
        case '3':
            label = '更新';
            break;
    }

    if (label === '') {
        return;
    }

    var pjKey = event.project.projectKey;
    var createdUser = event.createdUser.name;

    var content = event.content;
    var key = content.key_id;
    var title = content.summary;

    // 課題のUR
    var url = 'https://<your backlog domain>.backlog.jp/view/' + pjKey + '-' + key;
    // message 本文作成
    var message = createdUser + 'が、' +
                  '課題 \'' + title + '\' を' + label +
                  'したみたいでゲソ。確認するでゲソ。:squid:\n';
    message += url;
    if (type == '1') {
        var issueType = content.issueType.name;
        var priority = content.priority.name;
        var assignee = content.assignee == null ? '担当者未設定' : content.assignee.name;
        var dueDt = content.dueDate == '' ? '期限設定無し' : content.dueDate;
        message += '\n種別  : ' + issueType + '\n';
        message += '優先度: ' + priority + '\n'
        message += '担当者: ' + assignee + '\n'
        message += '期限  : ' + dueDt;
    }

    // POSTデータ作成
    var payload = 'payload={' +
                        '"text": "' + message + '",' +
                        '"channel": "' + channel + '",' +
                        '"username": "' + botName  + '"' +
                  '}';
    console.log(payload);

    var options = {
        uri: slackApi,
        form: payload,
        json: true
    };

    // Slack通知
    request.post(options, function(err, res, body) {
        if (err || res.statusCode != 200 || body.toString('utf-8') != 'ok') {
            console.log('Notification to Slack failed. IssueURL: ' + url);
            console.log("error: " + err);
        } else {
            console.log(body);
        }
    });
};
