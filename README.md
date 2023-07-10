# chowis
chowis china homepage

支持chowis.cn 和 www.chowis.cn的话需要增加 @ 解析记录 和 www 解析记录

www: 常见主机记录，将域名解析为 www.@
@: 直接解析主域名 @
mail: 将域名解析为 mail.@，通常用于邮件服务
*: 泛解析，匹配其他所有域名 *.@

# 查看dns解析
dig -t a chowis.cn

# 加key让折叠菜单自动隐藏，其实是告诉react这个折叠菜单需要重新渲染
<ul className="nav-links" key={router.asPath}>
折叠菜单的这个key特别重要！！否则点击折叠菜单里的子菜单后，折叠菜单不会隐藏！


nginx 配置

# 对http进行https转发配置
server {
    listen 80;
    server_name chowis.cn www.chowis.cn;
    return 301 https://$server_name$request_uri;
}

# 配置https的证书
server {
  client_max_body_size 64M;
      listen 443 ssl;
      
      ssl_certificate /home/ubuntu/SSL/chowis.cn_nginx/chowis.cn_nginx/chowis.cn_bundle.crt;
      ssl_certificate_key /home/ubuntu/SSL/chowis.cn_nginx/chowis.cn_nginx/chowis.cn.key;
      server_name chowis.cn www.chowis.cn;
  
  
  location / {
              proxy_pass             http://127.0.0.1:3000;
              proxy_read_timeout     60;
              proxy_connect_timeout  60;
              proxy_redirect         off;
  
              # Allow the use of websockets
              proxy_http_version 1.1;
              proxy_set_header Upgrade $http_upgrade;
              proxy_set_header Connection 'upgrade';
              proxy_set_header Host $host;
              proxy_cache_bypass $http_upgrade;
  }

}
