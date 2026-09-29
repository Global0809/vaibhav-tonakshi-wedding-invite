# RSVP setup — Vaibhav & Tonakshi

## What is connected

The invitation submits attendance details through [FormSubmit](https://formsubmit.co/), addressed to **vaibhavbhatiab94@gmail.com**. This works with a static GitHub Pages website; no separate server, password or API secret is embedded in the website.

**Inbox activation and real email delivery are not yet verified. Complete the steps below before sending the invitation to guests.** A working page or successful deployment does not mean email delivery is ready.

The form collects the guest's name, email, phone, attendance, one/both days, additional guest count and optional additional guest names. Declining guests are not asked the attendance follow-up questions. The exact stay note is “Your stay will be lovingly hosted by us!”

## One-time setup for the inbox owner

1. Open the published invitation. With the inbox owner's permission, submit one clearly labelled test RSVP using details you are authorised to share. The service may hold the submission and email an activation link to the destination address.
2. Open **vaibhavbhatiab94@gmail.com**, find the activation email from FormSubmit (check Spam/Junk), and follow its activation link. No email password should be shared with the developer.
3. Return to the same published invitation and submit a second clearly labelled test RSVP. Confirm the actual RSVP email arrives and contains every field. A successful web message alone is not proof that it reached the inbox.
4. Test one acceptance and one decline, then share the invitation with guests only after delivery is confirmed. Remove the test entries from the inbox if desired.

If activation is not ready, guests can use the invitation's direct email link. That link opens their own email app; it does **not** send anything automatically. Ask guests to include their name, attendance, number of days and additional guest details.

## What the form does and does not promise

- The browser shows a success message only after the service returns an explicit successful response. It says the service accepted the RSVP; it does not claim an email was delivered.
- Timeouts, service errors and recognised activation responses keep the entered details on screen and offer a retry/email fallback. A timeout may occur after a request was received, so a retry can produce a duplicate; check names and addresses when counting guests.
- The website does not retain RSVP details in browser storage, analytics, public URLs or the public GitHub repository. Details are sent over HTTPS to FormSubmit and handled under [its privacy policy](https://formsubmit.co/privacy.pdf).
- This version delivers **email responses only**. No private response dashboard, Google Sheet, database, export tool or guest-management account has been created.
- A public static form cannot hide the destination email or enforce a trusted server-side guest list. Avoid asking for sensitive identity, payment or medical information here.
- AJAX submission disables CAPTCHA and uses a hidden honeypot plus a single-submit guard. These reduce simple spam/accidental duplicate clicks but do not guarantee spam protection. If spam becomes a problem, move to a managed form with CAPTCHA/rate limiting rather than placing a secret key in JavaScript.

## Optional Google Sheet later

For a shared guest list, a Google Form linked to a private Google Sheet is the simplest alternative. The owner creates the form with these same fields, connects a response Sheet, and gives the developer only the public responder link. Keep the Sheet private to the couple/planners; do not publish guest details. Replacing this form with that link does not require changing the invitation design.

## Technical integration

- Script: `rsvp.js`, loaded with `defer` after the form markup (or at the end of the page).
- AJAX endpoint: `https://formsubmit.co/ajax/vaibhavbhatiab94@gmail.com`.
- Required element IDs: `rsvp-form`, `rsvp-submit`, `rsvp-status`, `rsvp-confirmation`.
- Optional disclosure IDs: `attending-details`, `additional-guest-names`.
- Field names: `full_name`, `email`, `phone`, `attendance`, `days`, `additional_guests`, `guest_names`, `_honey`.
- Attendance values: `Joyfully accepting`, `Regretfully declining`. Day values: `One day`, `Both days`.
- Add native `required`, `type=email`, appropriate input modes and maxlength attributes to the visible form. Additional guest count is an integer from 0 to 8. Mark the status element `role=status` and `aria-live=polite`.
- In the confirmation region, the optional elements `[data-rsvp-title]`, `[data-rsvp-message]` and `[data-rsvp-receipt]` are updated without inserting user HTML.
- Automated tests must intercept/mock this endpoint. Do not submit live test requests without the inbox owner's permission.

Official references: [AJAX integration](https://formsubmit.co/ajax-documentation), [setup and options](https://formsubmit.co/documentation).
