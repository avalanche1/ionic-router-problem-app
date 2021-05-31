import {IonContent, IonPage} from "@ionic/react";
import {CustomerSubList} from "../components/CustomerSubList";

import "./CustomerList.css";

import {fixtures} from "../data/fixtures";

const CustomerList: React.FC = () => {
  // Explain: Customers that should have paid by today, but didn't.
  const overdueCustomerList = fixtures.customers.filter(
    ({paymentDayOfMonth, paidThisMonth}) => {
      if (paidThisMonth) return false;

      return new Date().getDate() > paymentDayOfMonth;
    },
  );

  //Explain: Customers whose day of pmnt hasn't arrived yet; or already paid.
  const undueCustomerList = fixtures.customers.filter(
    ({_id}) =>
      !overdueCustomerList.find(
        (overdueCustomerRecord) => overdueCustomerRecord._id === _id,
      ),
  );

  return (
    <IonPage>
      <IonContent fullscreen>
        <CustomerSubList
          list={overdueCustomerList}
          overdue={true}
          headerText={"Overdue"}
        />

        <CustomerSubList
          list={undueCustomerList}
          overdue={false}
          headerText={"Undue & paid"}
        />
      </IonContent>
    </IonPage>
  );
};

export default CustomerList;
