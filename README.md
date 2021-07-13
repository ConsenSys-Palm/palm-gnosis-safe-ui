# Palm Wallet UI
A simple UI to interact with the palm app.

Deliberately as simple as possible -- writen with javascript, using jQuery and twitter bootstrap.


# Docker Image

Github workflow build and publish docker image for each commit/merge on the main branch. These docker image has tag format `<git hash>-<epoch time>`
When a release is created new docker image is build and published with docker tag format `<git hash>-<epoch time>-<tag>`
These different docker tags helps deployment automation to deploy application to production and test environment when docker tag has git tag as postfix. 
When git tag tag postfix is missing, it will only be deployed to test environments.
