"use client";
import axios from "axios";
import { FormEvent } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useTaskMangerStore } from "@/store/AuthUserStore";

export const UserNameModel = ({
  setPopUpModel,
  popUpModel,

}: {
  setPopUpModel: (popUpModel: boolean) => void;
  popUpModel: boolean;

}) => {
  const fetchUserData = useTaskMangerStore((state) => state.fetchUserData);
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent page reload
    const formData = new FormData(e.currentTarget);
    const s_name = String(formData.get("name"));
    const name = s_name.charAt(0).toUpperCase() + s_name.slice(1).toLowerCase();
    try {
      const { data } = await axios.put(
        "http://localhost:5000/api/v1/user/update",
        { userName: name },
        { withCredentials: true }
      );
      if (!data.success) {
        throw new Error(data.message);
      }
      fetchUserData();
      toast("User Name change successfully!", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
        duration: 4000,
      });

      setPopUpModel(false);
    } catch (e) {
      console.log(e);
    }
  };

  return popUpModel ? (
    <>
      <Dialog open={popUpModel} onOpenChange={() => setPopUpModel(false)}>
        <DialogContent className="sm:max-w-[425px] text-white">
          <form onSubmit={handleFormSubmit} className="grid gap-4">
            <DialogHeader>
              <DialogTitle>Set Username</DialogTitle>
              {/* <DialogDescription>Optional description</DialogDescription> */}
            </DialogHeader>

            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" placeholder="hello world!" />
            </div>

            <DialogFooter>
              <DialogClose asChild className="cursor-pointer">
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" className="cursor-pointer">
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  ) : null;
};
