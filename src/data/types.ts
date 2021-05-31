export type Customers = CustomerRecord_T[];

export type CustomerRecord_T = {
  _id: string;
  fullName: string;
  address: string;
  phone: string;
  tariffPrice: number;
  speedDownMbps: number;
  speedUpMbps: number;
  paymentDayOfMonth: number;
  paidThisMonth: boolean;
  notes?: string;
};
