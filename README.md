This is a simple application that saves data into MySQL

Once you download - use following steps

npm install 

Run following commands in mysql:

create database woxen_csp;

use woxen_csp;
create table student_reg
(
studName varchar(50), 
email varchar(50), 
strongSub varchar(50), 
strongSubtop varchar(50), 
weakSub varchar(50), 
weakSubtop varchar(50), 
descriptionstu varchar(50), 
student varchar(50)
)

pre-requisites :
MySql with below details - you need to update below details
    host: '127.0.0.1',
    user: 'root',         // Your MySQL username
    password: 'admin', // Your MySQL password
    database: 'woxen_csp' // Your MySQL database name
