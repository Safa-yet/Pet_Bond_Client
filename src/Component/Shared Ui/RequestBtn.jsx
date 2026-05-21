

import {
  approveRequestApi,
  getPetRequestsApi,
  rejectRequestApi,
} from "@/lib/CallApi";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import ReqResponseBtn from "./ReqResponseBtn";


export default async function RequestBtn({ pet, token }) {
    const data = await getPetRequestsApi(pet._id, token);


console.log(data);


  return (
    <>
      <Modal>
        <Button variant="secondary">Request</Button>
        <Modal.Backdrop>
          <Modal.Container>
            <Modal.Dialog className="sm:max-w-[360px]">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-default text-foreground"></Modal.Icon>
                <Modal.Heading>Welcome to HeroUI</Modal.Heading>
              </Modal.Header>
              <Modal.Body>
                {data?.length === 0 && <p>No Requests Yet</p>}

           <ReqResponseBtn data={data} token={token} ></ReqResponseBtn>
              </Modal.Body>
              <Modal.Footer>
                <Button className="w-full" slot="close">
                  Continue
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>


    </>
  );
}
