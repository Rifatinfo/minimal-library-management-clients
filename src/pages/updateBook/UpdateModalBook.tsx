import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAddBooksMutation } from "@/redux/api/itemCreateAPI";
import { useState } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
const UpdateModalBook = () => {
    const [addBooks, { isLoading }] = useAddBooksMutation();
    const [open, setOpen] = useState(false);
    //  const dispatch = useAppDispatch();
    const form = useForm();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log("Form Data:", data);
        // dispatch(addBook(data as IBook))
        const res = await addBooks(data);
        console.log(res);
        setOpen(false);
        form.reset();
    };
    if (isLoading) {
        <p>Loading...</p>
    }
    return (
        <div>
            <div>
                <div className="flex justify-start items-start gap-5">
                    <Tabs defaultValue="Classic">
                        <TabsList>
                            <TabsTrigger value="Classic">FICTION</TabsTrigger>
                            <TabsTrigger value="Literary">NON_FICTION</TabsTrigger>
                            <TabsTrigger value="Mystery">SCIENCE</TabsTrigger>
                            <TabsTrigger value="Thriller">HISTORY</TabsTrigger>
                            <TabsTrigger value="Science">BIOGRAPHY</TabsTrigger>
                            <TabsTrigger value="Horror">FANTASY</TabsTrigger>
                        </TabsList>
                    </Tabs>

                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger asChild>

                            <Button variant="outline">Add Book Module</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Book</DialogTitle>
                            </DialogHeader>

                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="title"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Title</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter Title" {...field} value={field.value || ""} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="description"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Description</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter Description" {...field} value={field.value || ""} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="author"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Author</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Author" {...field} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="copies"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Copies</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Copies" {...field} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />

                                    {/* select filed  */}
                                    <FormField
                                        control={form.control}
                                        name="genre"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Genre</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl className="w-full border">
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select Genre to display" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="FICTION">FICTION</SelectItem>
                                                        <SelectItem value="NON_FICTION">NON_FICTION</SelectItem>
                                                        <SelectItem value="SCIENCE">SCIENCE</SelectItem>
                                                        <SelectItem value="HISTORY">HISTORY</SelectItem>
                                                        <SelectItem value="BIOGRAPHY">BIOGRAPHY</SelectItem>
                                                        <SelectItem value="FANTASY">FANTASY</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormItem>
                                        )}
                                    />
                                    <DialogFooter>
                                        <DialogClose asChild>
                                            <Button type="button" variant="outline">
                                                Cancel
                                            </Button>
                                        </DialogClose>
                                        <Button disabled={isLoading} type="submit">Save changes</Button>
                                    </DialogFooter>
                                </form>
                            </Form>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    );
};

export default UpdateModalBook;