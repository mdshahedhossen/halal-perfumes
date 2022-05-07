import React from "react";
import './Blogs.css'

const Blogs = () => {
  return (
    <div>
      <h1 className="QA">Question Answer</h1>
      <div className="box-container">
        <div className="box">
          <h3>Difference between javascript and nodejs</h3>
          <p>
            <ul>
                <li>
                JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.
                </li>
                <li>
                JavaScript is normally used for any client-side activity for one web application. An activity can be addressing business validation or dynamic page display in some schedule time interval or basic Ajax call kind of task. Those are used for a maximum time for any web application. Whereas Node JS mainly used for accessing or running any operating system for non-blocking operation. An operation like creating or executing a shell script, or getting some specific hardware-related information on one call or installed certificate details in the system or a lot of define task is non-blocking on an operating system.
                </li>
            </ul>
          </p>
        </div>
        <div className="box">
          <h3>
            When should you use nodejs and when should you use mongodb
          </h3>
          <p>
          Node.js is popularly being used in web applications because it lets the application run while it is fetching data from the backend server. It is asynchronous, event-driven and helps to build scalable web applications. Even though Node.js works well with MySQL database, the perfect combination is a NoSQL like MongoDB wherein the schema need not be well-structured. MongoDB represents the data as a collection of documents rather than tables related by foreign keys. This makes it possible for the varied types of data dealt over the internet to be stored decently and accessed in the web applications using Node.js. Another option is using CouchDB that also stores the data as JSON/BSON environment.
          </p>
        </div>
        <div className="box">
          <h3>
            {" "}
            Differences between sql and nosql databases
          </h3>
          <p>
            <ul>

            <li>
                SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
            </li>

            <li>
                SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
            </li>

            <li>
                SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
            </li>
            
            </ul>
          </p>
        </div>
        <div className="box">
          <h3>
            {" "}
            What is the purpose of jwt and how does it work?
          </h3>
          <p>
            JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
            <br />
            JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
