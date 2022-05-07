# ISYS PT

# Home Page (index.html)

In the home page, we display several sections:
1. Make a booking
2. About Us
3. Gallery
4. Services Information
5. Reviews
6. Contact Page and Contact form
7. Location (google map)

# Navigation Bar on Homepage

The navigation bar displays:
1. Home
2. About
3. Services 
4. Reviews
5. Contact 
6. Location 
7. FAQ
8. Login 
9. Chat 
10. Night Mode symbol 

Clicking on each of the buttons will bring us to the respective pages in the home page. 
By clicking on "Chat", a live chat box will appear on bottom right of the page where the user can chat with our staffs live. 


# Make A Booking (clicked on homepage index.html)

The general process of how the user makes a booking is:
1. click on "make a booking" on homepage
2. log in to their account
3. system leads user to the services page and display their booking history
4. they click on a service they want 
5. system leads user to fill up details about their pet and user clicks "click to proceed" button (includes privacy policy)
6. system leads user to fill up the check-in and check-out date, and user clicks "click to proceed to payment" button (includes privacy policy)
7. system leads user to fill up billing address and card details for payment
8. confirmation message (page) and redirected to homepage 

When the user clicks on the "Make a booking" button on the front page, we are 
then lead to a page to log in or sign up to make an account (pages/login.html).
We also included an option in the event that the user forgots their password, 
it leads them to another link to enter their email or usename, and a confirmation 
and reminder page (pages/thankyou_forgotpw.html) to notify the user to check their email to reset their account password. 

After the user logs in, there will be a loading page displayed, to notify user that the system is currently at the logging in stage (loading_login.html). 
At this stage (step 3), our webpage displays a page of our services and user can scroll down to view their booking history - this is where the user
can update and cancel their bookings (service.html).  

If the user clicks on a service button (step 4), it will lead them to a page where they have to fill up the form about the pet they are booking in for. 
They have to input details such as number of pets, name(s) of pet(s), behaviours or dietary requirements of their pet(s).
For the section where the user has to input what type of pet they are booking for, there are 4 options:

*Options for type of pet* :
- cats
- dogs
- cats & dogs
- others


For each option selected, the option to enter the number of the type of pet they have selected will change accordingly. 
As for the *other* (last) option, there will be a text box for the user to input the type of pet which is neither a cat nor a dog (step 5). 

Before clicking "Click to proceed", 
the user has to tick the checkbox: "I understand that my pet(s) is/are required to be vaccinated to book a stay with BestMate.". There is also a link to the privacy policy. 

However, at this page, the user can also chose to return to the services page by clicking "Back to services" incase the user has accidentally clicked or changed their mind. 
If the user wishes to continue, the user ticks the checkbox and click "Click to proceed". 
The system will then prompt the user to the next section: check-in and check-out date and time (step 6). 
In this step (6), if the user selects a check-out date that is earlier than the check-in date, there will be an error message notifying the user of that error and the user can select again. 
Otherwise, at the checkin & checkout date form, the user can proceed to click "Click to proceed to payment". Or if the user wants to return to the previous page,
the user can click "Previous" button to return to the pet query form so the user can change their inputs. 

The last step would be to fill up the payment form (the billing address and the card details). 
After clicking "confirm", there will be a confirmation and thank you page notifying user that they have made a booking. 

However, instead of clicking on a service, if user clicks "update booking" button to **update** their booking (update.html), the system will lead the user 
to a page where they have to fill up the new check-in and check-out date to reschedule their current booking. After the user confirms this option, 
the system will display a confirmation message of their update booking process (thankyou_upd.html), and redirect the user back to homepage. 

If the user clicks on "cancel booking" button to **cancel** that current booking (cancel.html), the system will prompt the user to a page to fill up the selected check-in
date and time that the user wants to cancel. After the user confirms this option, 
the system will display a confirmation message of their cancel booking process (thankyou_cancel.html), and redirect the user back to homepage.


# Login (clicked on navigation bar)  

When the user clicks "Login" to login to their account, they have 3 options:
1. enter their username and password and log in 
2. create a new account if they have not already have an account
3. forgot password


For option 1: When the user manages to login by pressing "Log In" button, the system will lead to the
services page where they can select the services if they want to make a booking, or they can scroll down the page to view
their booking history where they can choose to update or cancel their booking. [This is the same as the aforementioned step 5 in Make A Booking]. 

For option 2: When user wants to create an account, they click the "Sign Up" button. The system will then prompt them to a sign up form page (sign_up.html), 
where the user enters their name, username, password, email and phone number. Before proceeding, the user has to tick the checkbox regarding the 
terms and conditions about BestMate. By clicking on the *Terms and Conditions* link at the checkbox, 
the system will direct the user to our Terms & Conditions page (terms_cond.html). The form also includes a link to our Privacy Policy (privacypolicy.html).
The user then can proceeed by clicking "Make an account" button. After clicking, there will be a confirmation page showing that the user has successfully created an account adn redirects user to the homepage. After a few seconds, the page will redirect the user back to homepage.


For option 3: if the user has forgotten their password, they click on the link "Forgot password?". The system will then
lead the user to a page for the user to enter their username or email to find their account (forgotpw.html). The user
can proceed by clicking the "Find" button. The system will then display a confirmaton page about their resetting password
request via email(thankyou_forgotpw.html). After a few seconds, the page will redirect the user back to homepage. 



# Write A Review (clicked on homepage index.html / on navigation bar)

First, when the user clicks "Reviews" on the navigation bar on homepage, 
the system will direct the user to the review section (index.html#review) in the homepage (same page).
On this section, the reviews only display some (not all) of the reviews. On each review written by our
previous customers, there is a button "Write Review" for the user to write us a review. 
When the user clicks on the "Write Review" button, the system directs the user to a new page (write_review.html). On this new page, the page displays a write a review form - containing name, message and the stars to rate us. If the user has clicks "Submit" button to leave us a review, the system will display a thank you / confirmation page notifying the user that they have successfully written us a review. After a few seconds, the page will redirect the user back to homepage.

