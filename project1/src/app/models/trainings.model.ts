import { Technologies } from './technologies.model';
import { Mentor } from './mentor.model';

export class Trainings {

  id: BigInteger;
  status: string;
  progress: number;
  commissionAmount:number;
  rating:number;
  startDate:string;
  endDate:string;
  startTime:string;
  endTime:string;
  amountReceived:number;
  userId:BigInteger;
  userName:String;
  mentor_id:BigInteger;
  mentorName:string;
  skillId:BigInteger;
  skillName:string;
  mentor:Mentor;
  technologies:Technologies;
  fees:number;
  techId:BigInteger;
}
