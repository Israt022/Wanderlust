"use client";
import { TrashBin } from "@gravity-ui/icons";
import {AlertDialog, Button} from "@heroui/react";
import { redirect } from "next/navigation";
import { FaRegTrashCan } from "react-icons/fa6";

const DeleteAlert = ({destination}) => {
    const {_id,destinationName} = destination;

    const handleDelete = async () =>{
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`,{
            method : 'DELETE',
            headers: {
                'component-type' : 'application/json'
            }
        });
        const data = await res.json();
        redirect('/destinations')
    }
    return (
        <div>
            <AlertDialog>
                <Button className={'text-red-500 rounded-none'} variant="outline"><TrashBin/> Delete Destination</Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                        <AlertDialog.Icon status="danger" />
                        <AlertDialog.Heading>Delete Destination permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                        <p>
                            This will permanently delete <strong>My Awesome Project</strong> and all of its
                            data. This action cannot be undone.
                        </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                        <Button slot="close" variant="tertiary">
                            Cancel
                        </Button>
                        <Button onClick={handleDelete} slot="close" variant="danger">
                            <FaRegTrashCan/>  Delete Project
                        </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
                </AlertDialog>
        </div>
    );
};

export default DeleteAlert;