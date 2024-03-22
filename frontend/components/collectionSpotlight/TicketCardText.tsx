import React from "react";
import "./styles/Ticket.scss";

type Props = {};

export default function TicketCardText({}: Props) {
  return (
    <div className="container">
      <div className="bp-card" data-clickthrough="link">
        <div className="bp-card_label">
          <div className="bd-border_dotted"></div>
        </div>
        <div className="bp-card_content">
          <p className="secondary">Medium ticket</p>
          <h4>Ticket name</h4>

          <ul>
            <span>Including:</span>
            <li>Minimal 1</li>
            <li>Minimal 1</li>
            <li>Minimal 1</li>
          </ul>

          <a href="" className="price">
            € 9,-
          </a>
        </div>
      </div>
    </div>
  );
}
