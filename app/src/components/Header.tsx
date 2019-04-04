import * as React from "react";
import { MainModel } from "../models/MainModel";
import { CallType, RequestConfig } from "../../lib/local/grpcHandlerFactory";
import { ActionFunction1 } from "redux-actions";

export namespace HeaderProps {
  export interface Props {
    trail: string;
    handleSendRequest: any;
    requestConfig: RequestConfig<any>;
  }
}

export function Header(props: HeaderProps.Props, context?: any) {
  const { trail } = props;
  const { callType } = props.requestConfig;
  console.log("header props", props);

  let userConnectType;

  switch (callType) {
    case CallType.UNARY_CALL: {
      userConnectType = "UNARY";
      break;
    }
    case CallType.SERVER_STREAM: {
      userConnectType = "SERVER STREAM";
      break;
    }
    case CallType.CLIENT_STREAM: {
      userConnectType = "CLIENT STREAM";
      break;
    }
    case CallType.BIDI_STREAM: {
      userConnectType = "BIDIRECTIONAL";
      break;
    }
    default: {
      userConnectType = "Select an RPC";
    }
  }

  return (
    <div className="header">
      <div className="header-left">
        <div className="trail">{trail}</div>
        <div className="connection-display">{userConnectType}</div>
        <button className="send-button" onClick={props.handleSendRequest}>
          SEND REQUEST
        </button>
      </div>
      <div className="right">
        <h1>MuninRPC</h1>
        <img className="logo" src="./src/assets/raven.png" />
      </div>
    </div>
  );
}
