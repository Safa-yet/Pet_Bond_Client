
import { auth } from "@/lib/auth";
import { UpdatePetApi } from "@/lib/CallApi";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { FaEdit } from "react-icons/fa";


const EditBtn = async({ pet }) => {
      const { token } = await auth.api.getToken({
        headers: await headers(),
      });

    const formAction = async (formData) => {
    'use server';

    console.log(formData);
    revalidatePath("/dashboard/mypets");

    // // console.log(formData);
    return await UpdatePetApi(pet._id,token,formData);
  
  };

  return (
    <>
 <Modal>
      <Button variant="secondary">Edit</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-lg">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
               <FaEdit />
              </Modal.Icon>
              <Modal.Heading>Edit Your Pets</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and well get back to you. The modal adapts automatically
                when the keyboard appears on mobile.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form
                  action={formAction}
                  className="grid grid-cols-1 gap-4 md:grid-cols-2"
                >
                  {/* Pet Name */}
                  <TextField
                    name="petName"
                    defaultValue={
                      pet.petName
                    }
                  >
                    <Label>
                      Pet Name
                    </Label>

                    <Input />
                  </TextField>

                  {/* Species */}
                  <TextField
                    name="species"
                  >
                    <Label>
                      Species
                    </Label>

                    <select
                      name="species"
                      defaultValue={
                        pet.species
                      }
                      className="h-12 rounded-xl border px-4"
                    >
                      <option>
                        Dog
                      </option>

                      <option>
                        Cat
                      </option>

                      <option>
                        Bird
                      </option>

                      <option>
                        Rabbit
                      </option>
                    </select>
                  </TextField>

                  {/* Breed */}
                  <TextField
                    name="breed"
                    defaultValue={
                      pet.breed
                    }
                  >
                    <Label>
                      Breed
                    </Label>

                    <Input />
                  </TextField>

                  {/* Age */}
                  <TextField
                    name="age"
                    defaultValue={
                      pet.age
                    }
                  >
                    <Label>Age</Label>

                    <Input type="number" />
                  </TextField>

                  {/* Gender */}
                  <TextField
                    name="gender"
                  >
                    <Label>
                      Gender
                    </Label>

                    <select
                      name="gender"
                      defaultValue={
                        pet.gender
                      }
                      className="h-12 rounded-xl border px-4"
                    >
                      <option>
                        Male
                      </option>

                      <option>
                        Female
                      </option>
                    </select>
                  </TextField>

                  {/* Image */}
                  <TextField
                    name="image"
                    defaultValue={
                      pet.image
                    }
                  >
                    <Label>
                      Image URL
                    </Label>

                    <Input />
                  </TextField>

                  {/* Health */}
                  <TextField name="healthStatus">
                    <Label>
                      Health Status
                    </Label>

                    <select
                      name="healthStatus"
                      defaultValue={
                        pet.healthStatus
                      }
                      className="h-12 rounded-xl border px-4"
                    >
                      <option>
                        Healthy
                      </option>

                      <option>
                        Needs Treatment
                      </option>

                      <option>
                        Special Care
                      </option>
                    </select>
                  </TextField>

                  {/* Vaccination */}
                  <TextField name="vaccinationStatus">
                    <Label>
                      Vaccination
                    </Label>

                    <select
                      name="vaccinationStatus"
                      defaultValue={
                        pet.vaccinationStatus
                      }
                      className="h-12 rounded-xl border px-4"
                    >
                      <option>
                        Vaccinated
                      </option>

                      <option>
                        Not Vaccinated
                      </option>
                    </select>
                  </TextField>

                  {/* Location */}
                  <TextField
                    name="location"
                    defaultValue={
                      pet.location
                    }
                  >
                    <Label>
                      Location
                    </Label>

                    <Input />
                  </TextField>

                  {/* Fee */}
                  <TextField
                    name="adoptionFee"
                    defaultValue={
                      pet.adoptionFee
                    }
                  >
                    <Label>
                      Adoption Fee
                    </Label>

                    <Input type="number" />
                  </TextField>

                  {/* Description */}
                  <div className="md:col-span-2">
                    <TextField
                      name="description"
                      defaultValue={
                        pet.description
                      }
                    >
                      <Label>
                        Description
                      </Label>

                      <textarea
                        name="description"
                        defaultValue={
                          pet.description
                        }
                        rows={5}
                        className="w-full rounded-2xl border p-4"
                      />
                    </TextField>
                  </div>
     <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot="close" type="submit">Submit</Button>
            </Modal.Footer>

                </form>
              </Surface>
            </Modal.Body>
       
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
    
    

    </>
  );
};

export default EditBtn;