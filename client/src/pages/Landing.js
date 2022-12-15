//Here we will have the countdown to christmas and a Welcome to Gift Guide information paragraph with a request to login or sign up to continue

import React from "react";

const Landing = () => {
  return (
    <section className="landing">
      <div className="container text-center mb-5">
        <p className="about">Welcome to Gift Guide!<br></br><br></br>Gift Guide is an interactive wish list creation application that helps you with creating wishlists of gifts you would
          like to get from your loved ones.<br></br><br></br>You can create multiple wishlists with various themes, and even invite friends to view
          your lists!<br></br><br></br>Your friends can select items from the list to "reserve" so that other friends know they are being taken care of,
          but you will not see this, so it will still be a surprise when you receive it!<br></br><br></br>
          To enjoy Gift Guide please login or signup!
        </p>
      </div>
    </section>
  );
};

export default Landing;
