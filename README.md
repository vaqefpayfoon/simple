# Virtual Business Cards Holder

## Introduction

You are given an application that represents a virtual business cards holder.
It consists of a few components:
* `ContactTypeSelectorComponent` which allows the user to select the type of displayed Contacts (Private/Business/All).
* `RolodexComponent` that displays a list of Contacts and renders the `BusinessCardComponent`.
* `BusinessCardComponent` that takes a `Contact` object via @Input and renders it.

The connections between those components are missing, thus the application does not work.

## Setup for local environment

Follow these steps if you are using zip/git mode (i.e. not available inside DevSkiller in-browser IDE):

1. `npm install` to get dependencies.
1. Start the app with `npm run start` and open `http://localhost:4200/`.
1. Use `npm test` or `npm run test:watch` to see tests failing.
1. Fix issues so that tests pass.
1. Solve all the issues mentioned here.
1. Submit your code on the DevSkiller platform platform to verify that the task is completed.

## Problem Statement

Your goal is to connect the app`s components to make the app work:
1. Implement the `ContactsService`s methods and use them as a glue between `ContactTypeSelectorComponent` and `RolodexComponent`. Make `ContactTypeSelectorComponent` call the `ContactsService.setTypeOfContacts()` method to set the selected type of contacts. The `RolodexComponent` on the other hand should get the data observable via `ContactsService.getContacts()`.
1. Pass the Contact selected by the user from `RolodexComponent` to `BusinessCardComponent` via `@Input() contact`.
1. Do not render `BusinessCardComponent` if the selected Contact is no longer on the list (for example, when you change the type from Business to Private).

**Do not change the interface of the `ContactsService` and do not modify the HTML structure if it is not necessary.**
