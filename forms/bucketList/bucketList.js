/*
Scenario: Create a program that keeps a bucket list for a user and lets them look at it.   

Program 2 Requirements: 

Created a new form named 'bucketList'.
Asks user if they want to see their bucket list or add an item.
Gets bucket list item from the user or displays the entire bucket list in the console, one item per line. 
Runs until the user wants to stop. 
The program runs without error.
*/

let bucketList = []
i = 0
let seeBucketList = false

while (seeBucketList == false) {
    bucketList.push(prompt("Add an item to your bucket list"))
    i++
    seeBucketList = confirm("Would you like to see your bucketlist?")
}

for (x = 0; x < bucketList.length; x++)
    console.log(bucketList[x])
    
    
    
    
    