/*

Cubox：https://apps.apple.com/app/id1113361350

[rewrite_local]
^https?:\/\/cubox\.(cc|pro)\/c\/api\/userInfo url script-response-body https://raw.githubusercontent.com/iKath/K/main/Script/Cubox.js

[MITM]
hostname = cubox.cc, cubox.pro

*/
var kath = JSON.parse($response.body);
kath.data.isExpire = false;
kath.data.expireTime ="8888-08-08T08:08:08Z";
kath.data.nickName ="https://t.me/Guding88";
kath.data.level = 1;
kath.data.paymentSource = 9;
$done({ body: JSON.stringify(kath) });
