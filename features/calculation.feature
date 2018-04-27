Feature: Calculation

Scenario: Add two numbers
Given I have launched the application
When I enter numberone '2'
And I enter numbertwo '3'
Then I see the answer is equal to 5

Scenario: Subtract two numbers
Given I have launched the application
When I enter numberone '10'
And I enter numbertwo '3'
And Change the operator to '-'
Then I see the answer is equal to 7

Scenario:Multiply two numbers
Given I have launched the application
When I enter numberone '10'
And I enter numbertwo '3'
And Change the operator to '*'
Then I see the answer is equal to 30

Scenario:Division two numbers
Given I have launched the application
When I enter numberone '10'
And I enter numbertwo '2'
And Change the operator to '/'
Then I see the answer is equal to 5

