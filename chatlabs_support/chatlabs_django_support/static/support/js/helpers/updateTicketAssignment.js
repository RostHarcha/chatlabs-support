import { ticketAssignElement } from "../const/ELEMENTS.js";
import { state } from "../state.js";

export function updateTicketAssignment(assignmentData) {
    if(assignmentData.id == state.getCurrentChatId()) {
        ticketAssignElement.disabled = true;
        ticketAssignElement.value = "Принят в работу";
    }
}