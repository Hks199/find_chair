function getReqChair_fromEachRoom(rooms, requiredChairs) {
   let required_chairs = requiredChairs;
   let chair_Taken = 0;
   const result = rooms.map(room => {
      const [occupiedChairs, numberOfChairs] = room;
      // return (chairs - occupants.length);
      const freeChairAvailableinEachRoom = numberOfChairs - occupiedChairs.length;
      const chairTakenFromEachRoom = Math.min(required_chairs, freeChairAvailableinEachRoom);
      required_chairs = required_chairs - chairTakenFromEachRoom;
      chair_Taken = chair_Taken + chairTakenFromEachRoom;
      return chairTakenFromEachRoom;
   })

   if (chair_Taken < requiredChairs) {
      return `Required ${requiredChairs - chair_Taken} More chair`
   }
   return result;
}

const meeting_rooms = [['XXX', 5], ['XXXXX', 6], ['XXXXXX', 9], ['XXX', 5], ['XXX', 3], ['XXX', 5]]
const required_chairs = 10;
console.log(getReqChair_fromEachRoom(meeting_rooms, required_chairs));