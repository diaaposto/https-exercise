//first part of url tells you where the server is: domain name
send an http request, server sends a response: the convo ends
there's a client - browser - application making the request
who's the server? the server is the application that's running to fulfill the response

client server - think: client is the application that makes the request
server is the application that's responding to the request

servers:
one computer can run many applications -
:443 is a port
the port is how the computer knows which application it needs to talk to
I will be the server for anything that comes through this port
you can have 20 servers, each one must be listening in a different port

a web server usually listens on port 80
if it's a secure web server - most likely 443
server for email: 587

ftp is a server


because I'm using domain names - which makes it easier to find than an IP address

you can find what the ip address of a website is:
ping www.techmeme.com // use it to see if a server is alive
1) converts website to ip address

when you use a domain name - wtv the dictionary that holds the domain name tells u ip address is, that's where you go
every computer is different: some tend to cache data for a little while

when cache is full - sends a new ip address
translating a domain name to an ip address doesn't need to be done all the time, but def the first time
the translation may expire - needs more memory, more cpu, going to move mapping to direct a server to go to another server
modify the same domain name to look at a new machine - this translation can happen seldomly or often

the web of high traffic & big services get a lot of ppl, like facebook - they have thousands of servers
the way you resolve how you find which one serves you is like a lottery you win - today you go to this server..

dynamic rerouting to addresses
go to server, get a resource, send back location to the resource
http: i can transfer anything: hypertext

URL vs URI:
we all use URL -- contains 3 elements: protocol, domain name and name of resource - so it can be used as a locator
between the protocol, name and site, you can locate it anywhere it is

URI: broad term used - anything that helps you find things is a URI - can locate files in a server, not necessarily used for the web - not a domain or ip address

THE WEB

CLIENT AND SERVER:

CLIENT: whichever makes the request - ex: chrome, curl,

SERVER: whichever application responds to the request

where do i find the given server that'll answer the request? PORT NUMBER

in most cases you don't type a port number --

www.metaweather.com - this website provides an API

web provided for developers:

sometimes the resources we're looking for are changing constantly, like the weather, stock prices
you're always asking for the same resource -
url is pointing to a place that requires real-time information - info that needs to be calculated as soon as someone asks
ex: give me the weather right now

this is what it is to be working with api's
server has resources that are calculated - meant for programmatic access: someone's going to be checking this constantly
you ask for same resource, answer will be different all the time

url has strange characters that start with a question mark: parameters - not name of resource, additional elements server needs to figure out what I'm asking for: tell me what u know about toronto

server responds in JSON
this response comes in an "object" JSON - this is just data you care about - response that only has the data you're asking for, nothing else
other responses come in HTML

curl https://www.metaweather.com/api/location/4118/

4118 means toronto

you're asking for a resource in that server and what you get back looks like a huge JSON object
you can tell data is there - and you can tell that this was created right now

this is us sending a request to a server using curl
the response its sending back could be http but in this case it's a JS object that has just the data

open weather.js in sublime and find a website that tells you how to do this from JS

need to use a library called request
request is a simplified http client and it runs in JS

using a library called request, plug in the website
curl https://www.metaweather.com/api/location/4118/ and then function (error, body, ..)

now you get a javascript application that uses a library to become an http client
application now runs and you see a status code: 200

