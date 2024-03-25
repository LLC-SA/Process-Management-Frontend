import { zodResolver } from "@hookform/resolvers/zod";
import { CiCalendar as CalendarIcon } from "react-icons/ci";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "./shadcn_component/lib/utils";
import { Button } from "./shadcn_component/button";
import { Calendar } from "./shadcn_component/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./shadcn_component/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./shadcn_component/popover";
import { toast } from "./shadcn_component/lib/use-toast";

const FormSchema = z.object({
  dob: z.date({
    required_error: "Debe seleccionar una fecha",
  }),
});

export function DatePickerForm({ style }) {
  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data) {
    console.log(data);
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`flex gap-4 ${style}`}
      >
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              {/* <FormLabel>Date of birth</FormLabel> */}
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP", { locale: es })
                      ) : (
                        <span>Elija una fecha</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    localization={es}
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              {/* <FormDescription></FormDescription> */}
              <FormMessage className="ml-1 text-xs" />
            </FormItem>
          )}
        />
        <Button type="submit">Elegir</Button>
      </form>
    </Form>
  );
}
