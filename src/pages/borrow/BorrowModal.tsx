import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import { cn } from "@/lib/utils";
import { useAddBorrowMutation } from "@/redux/api/itemCreateAPI";
import type { IBook } from "@/types";
;
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";

interface BorrowModalProps {
    selectedBorrow: IBook | null
    setSelectedBorrow: (value: null) => void;
}

export function BorrowModal({ setSelectedBorrow, selectedBorrow }: BorrowModalProps) {
    const [addBorrow, { isLoading }] = useAddBorrowMutation();
    const form = useForm();

    const onSubmit : SubmitHandler<FieldValues> = async (data) => {
        console.log("Form Data : ", data);
        const copies = Number(data.copies);
        if(!copies || copies <= 0){
           alert("Please enter a valid number of copies to borrow");
           return;
        }
        if(!selectedBorrow?._id){
           alert("Book ID not found. Please try again");
           return;
        }
        await addBorrow({
            book: selectedBorrow._id,
            quantity : copies,
        }).unwrap();
        alert("Borrow Successfully");
        setSelectedBorrow(null);
        form.reset();
    }

    if (isLoading) {
        <p>Loading ...</p>
    }
    return (
        <div>
            <div className="flex justify-start items-start gap-5">
                <Dialog
                    open={!!selectedBorrow}
                    onOpenChange={(open) => !open && setSelectedBorrow(null)}
                >
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Borrow</DialogTitle>
                        </DialogHeader>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="copies"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Copies</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter Copies" {...field} value={field.value || ""} required />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />

                                {/* date picker  */}
                                <FormField
                                    control={form.control}
                                    name="dob"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel>Due Date</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                " pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>Pick a date</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        captionLayout="dropdown"
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </FormItem>
                                    )}
                                />

                                <DialogFooter>
                                    <DialogClose asChild>
                                        <Button type="button" variant="outline">
                                            Cancel
                                        </Button>
                                    </DialogClose>
                                    <Button type="submit">Save changes</Button>
                                </DialogFooter>
                            </form>
                        </Form>
                    </DialogContent>
                </Dialog>
            </div>


        </div>

    );
}