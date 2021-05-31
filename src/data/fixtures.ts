import {Customers} from "./types";

export const fixtures: Fixtures = {
  customers: [
    {
      _id: "id1",
      fullName: "John Smith",
      address: "Hurma mah, Sk.23, apt 3, 15",
      phone: "+90 567 345 2929",
      speedDownMbps: 30,
      speedUpMbps: 10,
      tariffPrice: 100,
      paymentDayOfMonth: 10,
      paidThisMonth: false,
    },
    {
      _id: "id2",
      fullName: "Artuk Shafar",
      address: "Liman mah, Sk.31, 10B",
      phone: "+70 909 158 2860",
      speedDownMbps: 200,
      speedUpMbps: 20,
      tariffPrice: 0,
      paymentDayOfMonth: 16,
      paidThisMonth: false,
      notes: "Our app developer",
    },
    {
      _id: "id3",
      fullName: "Pix Mix",
      address: "Baborobot mah, apt 9999",
      phone: "+77 777777777",
      speedDownMbps: 1000,
      speedUpMbps: 200,
      tariffPrice: 1,
      paymentDayOfMonth: 15,
      paidThisMonth: false,
      notes: "Я ПЛОТИТЬ НЕ БУДУ!!!",
    },
    {
      _id: "id4",
      fullName: "Cam Abayrak",
      address: "Muratpaša mah, Sk.22, 10B",
      phone: "+90 555 058 2860",
      speedDownMbps: 50,
      speedUpMbps: 5,
      tariffPrice: 120,
      paymentDayOfMonth: 2,
      paidThisMonth: false,
    },
    {
      _id: "id5",
      fullName: "Mustafa Guvenal",
      address: "Altinkum mah, Sk.230, apt 13, C1",
      phone: "+90 570 345 2212",
      speedDownMbps: 100,
      speedUpMbps: 5,
      tariffPrice: 130,
      paymentDayOfMonth: 30,
      paidThisMonth: false,
    },
    {
      _id: "id6",
      fullName: "Mustafa Guvenal",
      address: "Altinkum mah, Sk.230, apt 13, C1",
      phone: "+90 570 345 2212",
      speedDownMbps: 100,
      speedUpMbps: 5,
      tariffPrice: 130,
      paymentDayOfMonth: 30,
      paidThisMonth: false,
    },
    {
      _id: "id7",
      fullName: "Mustafa Guvenal",
      address: "Altinkum mah, Sk.230, apt 13, C1",
      phone: "+90 570 345 2212",
      speedDownMbps: 100,
      speedUpMbps: 5,
      tariffPrice: 130,
      paymentDayOfMonth: 30,
      paidThisMonth: false,
    },
    {
      _id: "id8",
      fullName: "Mustafa Guvenal",
      address: "Altinkum mah, Sk.230, apt 13, C1",
      phone: "+90 570 345 2212",
      speedDownMbps: 100,
      speedUpMbps: 5,
      tariffPrice: 130,
      paymentDayOfMonth: 30,
      paidThisMonth: false,
    },
  ],
};

export type Fixtures = {customers: Customers};