

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


import { useState } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";

export function AddModalBook() {
    const [open, setOpen] = useState(false);
   
    const form = useForm();

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log("Form Data:", data);
        setOpen(false);
        form.reset();
    };


    return (
        <div>
            <div className="flex justify-start items-start gap-5">
                <Tabs defaultValue="Classic">
                    <TabsList>
                        <TabsTrigger  value="Classic">Classic</TabsTrigger>
                        <TabsTrigger  value="Literary">Literary</TabsTrigger>
                        <TabsTrigger  value="Mystery">Mystery</TabsTrigger>
                        <TabsTrigger  value="Thriller">Thriller</TabsTrigger>
                        <TabsTrigger  value="Science">Science</TabsTrigger>
                        <TabsTrigger  value="Horror">Horror</TabsTrigger>
                        <TabsTrigger  value="Fantasy">Fantasy</TabsTrigger>
                        <TabsTrigger  value="Adventure">Adventure</TabsTrigger>
                        <TabsTrigger  value="Romance">Romance</TabsTrigger>
                        <TabsTrigger  value="Western">Western</TabsTrigger>
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
                                name="Title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter name" {...field} value={field.value || ""} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="Description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter name" {...field} value={field.value || ""} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="Author"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Author</FormLabel>
                                        <FormControl>
                                            <Input placeholder="description" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="Copies"
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
                                name="Genre"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Genre</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl className="w-full border">
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a verified email to display" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="Classic">Classic</SelectItem>
                                                <SelectItem value="Literary">Literary</SelectItem>
                                                <SelectItem value="Historical">Historical</SelectItem>
                                                <SelectItem value="Mystery">Mystery</SelectItem>
                                                <SelectItem value="Thriller">Thriller</SelectItem>
                                                <SelectItem value="Horror">Horror</SelectItem>
                                                <SelectItem value="Fantasy">Fantasy</SelectItem>
                                                <SelectItem value="Adventure">Adventure</SelectItem>
                                                <SelectItem value="Romance">Romance</SelectItem>
                                                <SelectItem value="Western">Western</SelectItem>
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
