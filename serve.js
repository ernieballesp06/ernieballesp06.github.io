var request = require('request');
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
var burp0_cookie = 'clang=en; SID=6fb8193b-ab6d-4202-8789-c233dacd2f6b; __cfduid=d6bfa536e69fffbf5e79fa47cecbbe6a61571633548'

var burp0_bodyString = "api_code=1770d5d9-bcea-4d28-ad21-6cbd5be018a8&ct=1571626952478&method=verify-email-token&token=b8Kx1wqVAb956loe8Whxp1ybMy0s%2FXimTmNa%2BZixOeaXBG5cY%2FHeJQ%2B0ey4dz93pj4hqkoX1cV7RnZM%2FqrsdYihJ1dd6AFYlSy%2BlwpzzpkJ10jnqRKAc7QAJswSAlCWKS2YLiF0ME%2FgIQ89q9Y49hA%3D%3D"

var burp0_headers = {
    "Connection": "close", 
    "Content-Length": "265", 
    "Accept": "application/json, text/plain, */*", 
    "Origin": "null", 
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36", 
    "DNT": "1", 
    "Sec-Fetch-Mode": "cors", 
    "Content-Type": "application/x-www-form-urlencoded", 
    "Sec-Fetch-Site": "cross-site", 
    "Referer": "https://login.blockchain.com/", 
    "Accept-Encoding": "gzip, deflate", 
    "Accept-Language": "en-US,en;q=0.9",
    'Cookie': burp0_cookie
}

var burp0_options = {
    url: "https://blockchain.info:443/wallet",
    headers: burp0_headers,
    method: "post",
    body: burp0_bodyString
}
request(burp0_options, function (error, response, body) {
console.log('statusCode:', response && response.statusCode)
console.log('error: ', error)
console.log('body: ', body)
})

