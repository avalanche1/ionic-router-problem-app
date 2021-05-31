import "./exit-app-on-back-button";

import { Redirect, Route } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";

import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import CustomerList from "./pages/CustomerList";
import { CustomerForm } from "./pages/CustomerForm/CustomerForm";

import { list, add } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

/* Overrides to some defaults */
import "./theme/overrides.css";

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Redirect exact from="/" to="/customer-list" />
            {/*<Redirect exact from="/" to="/new-customer" />*/}

            <Route exact path="/customer-list">
              <CustomerList />
            </Route>
            <Route exact path="/edit-customer/:id">
              <CustomerForm readOnly />
            </Route>
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="customer-list" href="/customer-list">
              <IonIcon icon={list} />
              <IonLabel>Customers</IonLabel>
            </IonTabButton>

            <IonTabButton tab="new-customer" href="/new-customer">
              <IonIcon icon={add} />
              <IonLabel>Add customer</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
