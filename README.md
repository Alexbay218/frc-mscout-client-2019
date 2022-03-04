# DEPRECIATED

I've been working on Koronis Scouting System instead of this project since 2019. The problem with this project is that it's not very extendable for each game. KSS is a lot better in a lot of ways. Check it out here: https://web.koronis.cc

# frc-mscout-client-2019

Laptop System Repository: https://github.com/Alexbay218/frc-mscout-core/

Laptop Analytics Repository: https://github.com/Alexbay218/frc-mscout-analytics-2019/

## Simple Tutorial:

You need a laptop running Windows with a webcam and a device that can access the web (phone preferred).


Download the laptop program on https://github.com/Alexbay218/frc-mscout-core/releases/tag/v1.0.2


Navigate to the website on the other device (https://alexbay218.github.io/frc-mscout-client-2019/)


Fill in the details on the website and click start.


To start match scouting, click the top portion with time, cargo, and hatch displays.


Notice the time is now counting down. Click on the other box that corresponds to each action ("Pick up hatch", etc.)


Wait for the time to reach -10, which will automatically end the match (this is the only way currently to end the match).

Now there are three ways to transfer data:
1) Scan the flashing series of qr codes by using the laptop program (click on Start QR Code Stream)
2) Click the Single QR button to get the whole match in the form of a single qr code (Note: this may be extremely large if a lot of events happen). Click the button again to switch back. Scan the qr code by clicking on Start Single QR Code button on the laptop program.
3) When the qr code stream is displayed, the raw text of the match is copied to the clipboard. Get the text to the laptop (email, messaging system, etc.) and enter it into the raw entry text box on the laptop program. Click on the raw entry button to save the data.
Clicking the back button will take you to and from the qr code display page and it will display the previous match scouted (persists after reloads too)

The data will then be saved as a .fmt file under the data folder in the same folder as the laptop program. I will create documentation as to how it is stored soon, and will be working on programs during the build season to make it useful.

## Why this system?
This system not only operates completely offline (when you visit the website, it automatically caches itself) and uses multiple ways to transfer the data.
The other part is that it is event-based. By logging the events that take place, you can extract data like cycle times, cycle accuracies, performance during auto/sandstorm, and more. Very few other systems does this and only looks at totals (total hatches on cargo ship in a match). 
This system and event-based systems are better than regular match scouting systems precisely because it contains the same data + timestamps of events happening. 
My focus during this season is to write an analytics app to take advantage of event-based match scouting systems and maintain these systems as well. I believe this system is good enough to become the standard for a majority of FRC teams to use. It's time to change match scouting!
Please share this repo to others!
