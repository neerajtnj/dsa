function meetingRooms(meetings) {
    let rooms=[]
    for(let i=0;i<meetings.length;i++)
    {
        rooms.push({timestamp:meetings[i][0],roomChanges:1})
        rooms.push({timestamp:meetings[i][1],roomChanges:-1})

    }
    
    
    rooms.sort((a,b)=>a.timestamp -b.timestamp)
    console.log(rooms)
    let minsRooms=0,meetingInProgress=0
    for(let room of rooms )
    {
        meetingInProgress+=room.roomChanges
        minsRooms = Math.max(minsRooms,meetingInProgress)
    }
    return minsRooms
}
console.log(meetingRooms([[0,20],[5,10],[10,15]])) //3