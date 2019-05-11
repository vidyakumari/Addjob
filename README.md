1. create  a company in DB
2. login with the company
3. on home page get all jobs posted by company
4. Add job feature and update list without refreshing page
5. When login through a role: user or lands on home page without any login, show all jobs along with newly added job.
6. when company sign ins, on the list of jobs posted by company, add an edit icon with each card, clicking the icon will take you to edit job page where user can see pre filled forms with existing job details and edit them as per need.
7. When user sign in, he sees apply button corresponding to each job, clicking on which will apply user to that job with status `Apply` which was set by us in Apply schema using enum.
8. When company login, show a button just below the header or in header(your wish), with title `Get Applied`, clicking on which will show the list of all the users who have applied for all the jobs posted by the company along with the status of each application, which in our case for now will be `Apply`.
