export class Insurelist {
  $key: string;
  _id: string;
  collection: string;
  consumername: string;
  consumerid:string;
  validatorid:string;
  invoiceid:string;
  invoicetime:string;
  invoiceuser:string;
  invoiceimage:string;
  invoicedesc:string;
  billamount: number;
  insuranceamt: number;
  insurepremium: number;
  insureprovider: string;
  premiumpaid: false;
  decision: string; // pending,issued, refused, expired
  decisionhistory : Array<{ from: string, to: string, time: number, operator: string }>;
  paidtimeStamp: number;
  gpsofconsumer: string;
  blockchaintransactionid: string;
  active = true;
  timeStamp: number;
}
