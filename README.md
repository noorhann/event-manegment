## Overview
The Event Management module is a custom Drupal module that enables administrators to create, manage, and view events within the Drupal site. It features a configuration form to control the display of events and logs configuration changes. The module defines custom database tables to store event data and track changes.

## Features
Create, Edit, and View Events: Manage events with attributes such as title, image, description, start and end times, and category.
Custom Database Tables: The module creates event and event_management_log tables to store event data and log configuration changes.
Configuration Form: A settings page for customizing options like showing past events and setting the number of events per page.
Logging: Logs configuration changes to track user actions.
User-Friendly Admin Interface: Provides routes for event creation, event listing, and event details.

## Prerequisites
Drupal 9.x or 10.x installed and running.
Access to a command-line interface (CLI) with Drush installed.
Proper permissions to manage modules and edit settings.php.
Docker installed and set up for your Drupal environment.
### Installation Guide

Step 1: Clone the Module
Navigate to your Drupal project's modules/custom directory and clone the repository:

```bash

cd /path/to/drupal/root/modules/custom/
git clone https://github.com/your-repo/event_management.git

```

Step 2: Access Your Drupal Container
Run commands inside the Docker container where your Drupal application is installed:

```bash

docker exec -it drupal /bin/bash
```

Step 3: Enable the Module
Use Drush inside the Docker container to enable the module:

```bash

drush en event_management -y
```

Step 4: Install Module Dependencies
Ensure that required dependencies are installed by running Composer inside the container:

```bash

composer install
```

Step 5: Clear Drupal Cache
Clear Drupal's cache to ensure that all routes, configurations, and services are recognized:

```bash

drush cr
```


Step 6: Verify Module Installation
Check the Reports > Status report page in the Drupal admin interface to confirm the module is installed and functioning correctly. You can also use Drush:

```bash

drush status
```

Step 7: Access Module Features
Event Management Settings: Visit /admin/config/event-management to access the configuration page.
Create an Event: Go to /admin/events/create to add a new event.
List Events: Visit /admin/events/list to view a list of all events.
View Event Details: Use /admin/events/{event_id} to view details of a specific event, replacing {event_id} with the actual event ID.
Configuration
Accessing the Settings Page
Navigate to Configuration > Event Management or visit /admin/config/event-management to update the module settings.

Available Configuration Options
Show Past Events: Toggle to display or hide past events.
Number of Events Per Page: Specify the number of events displayed on the event listing page.
Log Changes: Enable or disable logging of configuration changes.
Module Structure

```bash
event_management/
├── event_management.info.yml
├── event_management.install
├── event_management.routing.yml
├── README.md
├── src/
│   ├── Controller/
│   │   └── EventController.php
│   ├── Form/
│   │   └── SettingsForm.php
│   └── Plugin/
│       └── Block/
│           └── LatestEventsBlock.php
└── templates/
    ├── event-listing-page.html.twig
    └── event-detail.html.twig
```

Explanation of Files
event_management.info.yml: Defines the module's metadata.
event_management.install: Handles database table creation and default configurations.
event_management.routing.yml: Defines routes for the module.
src/Controller/EventController.php: Contains logic for handling event creation, listing, and viewing.
src/Form/SettingsForm.php: Provides the configuration form logic.
templates/: Contains Twig templates for rendering event listings and details.
### Troubleshooting
Common Issues
Module Routes Not Found:

Clear the cache: drush cr.
Ensure the module is enabled: drush pm:list --status=enabled | grep event_management.
Verify the structure of event_management.routing.yml.
Database Tables Not Created:

Uninstall and reinstall the module to trigger hook_install():
```bash
drush pm:uninstall event_management -y
drush en event_management -y
```
Permissions:

Make sure your user role has the "administer site configuration" permission.
Trusted Host Patterns Warning:

Ensure that the trusted_host_patterns configuration in settings.php is correct.
Security Best Practices
Ensure the trusted_host_patterns setting is configured to prevent HTTP HOST header attacks.
Regularly update Drupal core and all contributed modules to the latest versions to avoid security vulnerabilities.
