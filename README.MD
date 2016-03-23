# find_ur_ip

#### express 小习作

POST body support www-form-urlencoded & application/json.

Router                         | Result                     | HTTP verb
------------------------------ | -------------------------- | -----------
/api                           | Get the api list           | GET
/api/ip                        | Get the ip api list        | GET
/api/ip/raw                    | Get the raw result         | GET
/api/ip/json                   | Get the JSON result        | GET
/api/ip/jsonp                  | Get the JSONP result       | GET
/api/location                  | Get the location api list  | GET / POST
/api/location?type=full        | Get the full json          | GET
/api/location?type=country     | Get country in json        | GET
/api/location?type=province    | Get province in json       | GET
/api/location?type=city        | Get city in json           | GET
/api/location?type=full        | Get full json with spec ip | POST
/api/location?type=country     | Get country with spec ip   | POST
/api/location?type=province    | Get province with spec ip  | POST
/api/location?type=city        | Get city with spec ip      | POST

The POST body contains the key "ip" & the value "8.8.8.8"(you indicate).
