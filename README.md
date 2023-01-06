# Expense Tracker

Here is a full-stack expense tracking application. I built a responsive React front-end and an optimized REST API using Express. Also, implemented and integrated a MongoDB database to model and organize user transaction logs.  
  
Currently, I have not completed the deployment of this project therefore you can try it locally.  
First and foremost, create a config.env file inside config folder using this template:  
```zsh
NODE_ENV = development
PORT = 4000
MONGO_URI = <your mongodb uri>
JWT_SECRET = <your jwt secret>
COOKIE_PARSER = <your cookie parser secret>
```
Run the following commands on project directory:  
```zsh
cd client
npm install
cd ..
npm install
npm run dev
```

Here are some screenshots:  
<img width="400" height="640" alt="Screen Shot 2023-01-04 at 6 44 46 PM" src="https://user-images.githubusercontent.com/63821860/210690910-f4349747-d8a3-40e4-ad22-81929124914a.png">
<img width="400" height="640" alt="Screen Shot 2023-01-04 at 7 01 02 PM" src="https://user-images.githubusercontent.com/63821860/210691708-1a9c1a53-baf9-40b4-95be-60be0f845360.png">


