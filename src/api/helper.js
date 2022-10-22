import { DELIVERY_CUSTOMER_TYPE } from '../api/validator'

const createSender = (sender) => {
    let personal = {
        firstName: sender.name,
        middleName: "",
        lastName: ""
      }
      let contacts = [
        {
            value: sender.email,
            type: "Email",
          },
          {
            value: `${sender.phone.dialCode}${sender.phone.phoneNumber.replace(/\s/g, "")}`,
            type: "PhoneNumber",
          }
      ]

      if(sender.fromAddress.shipperAddress != ""){
        contacts.push(
          {
            value: `${sender.fromAddress.shipperAddress}`,
            type: "Address",
          });
      }

      let senderDetails = {
        type: DELIVERY_CUSTOMER_TYPE.SENDER,
        personal: personal,
        contacts: contacts,
        sequence: -1
      }

      return senderDetails;
}

const createReceiver = (receiver) => {
    let personal = {
        firstName: receiver.name,
        middleName: "",
        lastName: ""
      }
      let contacts = [
        {
            value: receiver.email,
            type: "Email",
          },
          {
            value: `${receiver.phone.dialCode}${receiver.phone.phoneNumber.replace(/\s/g, "")}`,
            type: "PhoneNumber",
          }
      ]

      if(receiver.toAddress.shipperAddress != ""){
        contacts.push(
          {
            value: `${receiver.toAddress.shipperAddress}`,
            type: "Address",
          },
        )
      }

      let receiverDetails = {
        type: DELIVERY_CUSTOMER_TYPE.RECIPIENT,
        personal: personal,
        contacts: contacts,
        sequence: +1,
      }

      return receiverDetails;
}

export { createSender, createReceiver };