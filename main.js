
class zoo {
    ZooName = `Biblical Zoo`;
    OpeningHours = '8 am till 9 pm';
    HasResturants = true;
    PlaceAt = "Jerusalem";
    AgeOfTheVisitor;

    HowManyVisitors(){
        let visitors=0;
        while (visitors!=7000){
            visitors+=1;
             let message="You can still enter + ${7000-visitors} + people to the zoo";
        }
        const message= "The place is full";
        return message;
    }

    TicketPrice(AgeOfTheVisitor){
        AgeOfTheVisitor=this.AgeOfTheVisitor;
        if (AgeOfTheVisitor<=5){
            console.log("The price for the ticket for child under the age 6 is free");
        }
        else if(AgeOfTheVisitor>5 && AgeOfTheVisitor<60) {
            console.log("The price for adult is 50 shekels");
        }
        else{
            console.log("The price for retriee is 35 shekels");
        }
        }
    }




