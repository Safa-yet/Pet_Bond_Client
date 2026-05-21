"use client";
import { AlertDialog, Button } from "@heroui/react";
const RemoveBtn = ({pet}) => {
    const id = pet._id;
    console.log(id,"pet");
const handleDelete = async() => {
        const res = await fetch(`http://localhost:8000/animal/${id}`, {
            method: 'DELETE',
        });
        const data = await res.json();
        console.log('Delete Response:', data);
        if(data.deletedCount > 0){
             window.location.reload();
        }

    
      }

  return (
    <>
      <AlertDialog>
        <Button variant="danger">Delete Pet</Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-[400px]">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>
                  Delete pet permanently?
                </AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will permanently delete{" "}
                  <strong>My Awesome Project</strong> and all of its data. This
                  action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button
                  slot="close"
                  variant="danger"
                  onClick={() => handleDelete()}
                >
                  Delete Pet
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </>
  );
};

export default RemoveBtn;
