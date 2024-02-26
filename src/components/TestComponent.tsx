"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
import { LuRocket } from "react-icons/lu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import CalendarForm from "./example/calendar-form";
import CardDemo from "./example/card-demo";
import CardWithForm from "./example/card-with-form";
import CarouselDApiDemo from "./example/carousel-api";
import CheckboxReactHookFormMultiple from "./example/checkbox-form-multiple";
import CollapsibleDemo from "./example/collapsible-demo";
import ComboboxDemo from "./example/combobox-demo";
import CommandDialogDemo from "./example/command-dialog";
import ContextMenuDemo from "./example/context-menu-demo";
import DataTableDemo from "./example/data-table-demo";
import DialogDemo from "./example/dialog-demo";
import DrawerDemo from "./example/drawer-demo";
import DrawerDialogDemo from "./example/drawer-dialog";
import DropdownMenuDemo from "./example/dropdown-menu-demo";
import HoverCardDemo from "./example/hover-card-demo";
import MenubarDemo from "./example/menubar-demo";
import { NavigationMenuDemo } from "./example/navigation-menu-demo";
import PaginationDemo from "./example/pagination-demo";
import PopoverDemo from "./example/popover-demo";
import ProgressDemo from "./example/progress-demo";
import RadioGroupDemo from "./example/radio-group-demo";
import ResizableDemo from "./example/resizable-demo";
import ScrollAreaDemo from "./example/scroll-area-demo";
import SelectDemo from "./example/select-demo";
import SheetDemo from "./example/sheet-demo";
import SkeletonDemo from "./example/skeleton-demo";
import SliderDemo from "./example/slider-demo";
import SonnerDemo from "./example/sonner-demo";
import TableDemo from "./example/table-demo";
import TabsDemo from "./example/tabs-demo";
import TextareaDemo from "./example/textarea-demo";
import ToastDemo from "./example/toast-demo";
import ToggleDemo from "./example/toggle-demo";
import ToggleGroupDemo from "./example/toggle-group-demo";
import TooltipDemo from "./example/tooltip-demo";
import DemoWrapper from "./DemoWrapper";
// type ColorObject = {
//   [key: number]: string;
// };

function TestComponent() {
  return (
    <section className=" p-4 duration-75 transition-colors text-light-500 flex justify-center items-center flex-col gap-5 min-h-screen">

    
      <DemoWrapper title="Primary colors">
        <div className="flex  text-dark-50  gap-2 duration-75 transition-colors flex-wrap">
          <div className=" flex justify-center items-center w-10 duration-75 transition-colors h-10 rounded bg-primary-50">
            50
          </div>
          <div className=" flex justify-center items-center w-10 duration-75 transition-colors h-10 rounded bg-primary-100">
            100
          </div>
          <div className=" flex justify-center items-center w-10 duration-75 transition-colors h-10 rounded bg-primary-200">
            200
          </div>
          <div className=" flex justify-center items-center w-10 duration-75 transition-colors h-10 rounded bg-primary-300">
            300
          </div>
          <div className=" flex justify-center items-center w-10 duration-75 transition-colors h-10 rounded bg-primary-400">
            400
          </div>
          <div className=" flex justify-center items-center w-10 duration-75 transition-colors h-10 rounded bg-primary-500">
            500
          </div>
          <div className=" flex justify-center items-center w-10 duration-75 transition-colors h-10 rounded bg-primary-600">
            600
          </div>
          <div className=" flex justify-center items-center w-10 duration-75 transition-colors h-10 rounded bg-primary-700">
            700
          </div>
          <div className=" flex justify-center items-center w-10 duration-75 transition-colors h-10 rounded bg-primary-800">
            800
          </div>
          <div className=" flex justify-center items-center w-10 duration-75 transition-colors h-10 rounded bg-primary-900">
            900
          </div>
          <div className=" flex justify-center items-center w-10 duration-75 transition-colors h-10 rounded bg-primary-950">
            950
          </div>
        </div>{" "}
      </DemoWrapper>
      <DemoWrapper title="Dark colors">
        <div className="flex  text-light-800  gap-2 duration-75 transition-colors flex-wrap">
          <div className="flex justify-center items-center w-10 border-dark-50 border duration-75 transition-colors h-10 rounded bg-dark-50">
            50
          </div>
          <div className="flex justify-center items-center w-10 border-dark-50 border duration-75 transition-colors h-10 rounded bg-dark-100">
            100
          </div>
          <div className="flex justify-center items-center w-10 border-dark-50 border duration-75 transition-colors h-10 rounded bg-dark-200">
            200
          </div>
          <div className="flex justify-center items-center w-10 border-dark-50 border duration-75 transition-colors h-10 rounded bg-dark-300">
            300
          </div>
          <div className="flex justify-center items-center w-10 border-dark-50 border duration-75 transition-colors h-10 rounded bg-dark-400">
            400
          </div>
          <div className="flex justify-center items-center w-10 border-dark-50 border duration-75 transition-colors h-10 rounded bg-dark-500">
            500
          </div>
          <div className="flex justify-center items-center w-10 border-dark-50 border duration-75 transition-colors h-10 rounded bg-dark-600">
            600
          </div>
          <div className="flex justify-center items-center w-10 border-dark-50 border duration-75 transition-colors h-10 rounded bg-dark-700">
            700
          </div>
          <div className="flex justify-center items-center w-10 border-dark-50 border duration-75 transition-colors h-10 rounded bg-dark-800">
            800
          </div>
          <div className="flex justify-center items-center w-10 border-dark-50 border duration-75 transition-colors h-10 rounded bg-dark-900">
            900
          </div>
          <div className="flex justify-center items-center w-10 border-dark-50 border duration-75 transition-colors h-10 rounded bg-dark-950">
            950
          </div>
        </div>
      </DemoWrapper>
      <DemoWrapper title="Light colors">
        <div className="flex text-dark-500  gap-2 duration-75 transition-colors flex-wrap">
          <div className="flex justify-center items-center w-10 border-dark-50 border duration-75 transition-colors h-10 rounded bg-light-50">
            50
          </div>
          <div className="flex justify-center items-center w-10 border-dark-50 border duration-75 transition-colors h-10 rounded bg-light-100">
            100
          </div>
          <div className="flex justify-center items-center w-10 border-dark-50 border duration-75 transition-colors h-10 rounded bg-light-200">
            200
          </div>
          <div className="flex justify-center items-center w-10 border-dark-50 border duration-75 transition-colors h-10 rounded bg-light-300">
            300
          </div>
          <div className="flex justify-center items-center w-10 border-dark-50 border duration-75 transition-colors h-10 rounded bg-light-400">
            400
          </div>
          <div className="flex justify-center items-center w-10 border-dark-50 border duration-75 transition-colors h-10 rounded bg-light-500">
            500
          </div>
          <div className="flex justify-center items-center w-10 border-dark-50 border duration-75 transition-colors h-10 rounded bg-light-600">
            600
          </div>
          <div className="flex justify-center items-center w-10 border-dark-50 border duration-75 transition-colors h-10 rounded bg-light-700">
            700
          </div>
          <div className="flex justify-center items-center w-10 border-dark-50 border duration-75 transition-colors h-10 rounded bg-light-800">
            800
          </div>
          <div className="flex justify-center items-center w-10 border-dark-50 border duration-75 transition-colors h-10 rounded bg-light-900">
            900
          </div>
          <div className="flex justify-center items-center w-10 border-dark-50 border duration-75 transition-colors h-10 rounded bg-light-950">
            950
          </div>
        </div>
      </DemoWrapper>
      <DemoWrapper title="Primary buttons">
        <section className=" flex flex-wrap gap-2">
          <Button size={"lg"} variant={"primary-solid"}>
            Primary solid
          </Button>
          <Button size={"lg"} variant={"primary-outline"}>
            Primary outline
          </Button>
          <Button size={"lg"} variant={"primary-ghost"}>
            Primary ghost
          </Button>
        </section>
        <section className=" flex flex-wrap gap-2">
          <Button variant={"primary-solid"}>Primary solid</Button>
          <Button variant={"primary-outline"}>Primary outline</Button>
          <Button variant={"primary-ghost"}>Primary ghost</Button>
        </section>
        <section className=" flex flex-wrap gap-2">
          <Button size={"sm"} variant={"primary-solid"}>
            Small solid
          </Button>
          <Button size={"sm"} variant={"primary-outline"}>
            Small outline
          </Button>
          <Button size={"sm"} variant={"primary-ghost"}>
            Small ghost
          </Button>
        </section>
        <section className=" flex flex-wrap gap-2">
          <Button size={"icon"} variant={"primary-solid"}>
            <LuRocket />
          </Button>
          <Button size={"icon"} variant={"primary-outline"}>
            <LuRocket />
          </Button>
          <Button size={"icon"} variant={"primary-ghost"}>
            <LuRocket />
          </Button>
        </section>{" "}
      </DemoWrapper>
      <DemoWrapper title="Dark buttons">
        <section className=" flex flex-wrap gap-2">
          <Button size={"lg"} variant={"dark-solid"}>
            Large button
          </Button>
          <Button size={"lg"} variant={"dark-outline"}>
            Large button
          </Button>
          <Button size={"lg"} variant={"dark-ghost"}>
            Large button
          </Button>
        </section>
        <section className=" flex flex-wrap gap-2">
          <Button variant={"dark-solid"}>Dark solid</Button>
          <Button variant={"dark-outline"}>Dark outline</Button>
          <Button variant={"dark-ghost"}>Dark ghost</Button>
        </section>
        <section className=" flex flex-wrap gap-2">
          <Button size={"sm"} variant={"dark-solid"}>
            Small button
          </Button>
          <Button size={"sm"} variant={"dark-outline"}>
            Small button
          </Button>
          <Button size={"sm"} variant={"dark-ghost"}>
            Small button
          </Button>
        </section>
        <section className=" flex flex-wrap gap-2">
          <Button size={"icon"} variant={"dark-solid"}>
            <LuRocket />
          </Button>
          <Button size={"icon"} variant={"dark-outline"}>
            <LuRocket />
          </Button>
          <Button size={"icon"} variant={"dark-ghost"}>
            <LuRocket />
          </Button>
        </section>{" "}
      </DemoWrapper>
      <DemoWrapper title="Light buttons">
        <section className=" flex flex-wrap gap-2">
          <Button size={"lg"} variant={"light-solid"}>
            Large button
          </Button>
          <Button size={"lg"} variant={"light-outline"}>
            Large button
          </Button>
          <Button size={"lg"} variant={"light-ghost"}>
            Large button
          </Button>
        </section>
        <section className=" flex flex-wrap gap-2">
          <Button variant={"light-solid"}>Light solid</Button>
          <Button variant={"light-outline"}>Light outline</Button>
          <Button variant={"light-ghost"}>Light ghost</Button>
        </section>
        <section className=" flex flex-wrap gap-2">
          <Button size={"sm"} variant={"light-solid"}>
            Small button
          </Button>
          <Button size={"sm"} variant={"light-outline"}>
            Small button
          </Button>
          <Button size={"sm"} variant={"light-ghost"}>
            Small button
          </Button>
        </section>
        <section className=" flex flex-wrap gap-2">
          <Button size={"icon"} variant={"light-solid"}>
            <LuRocket />
          </Button>
          <Button size={"icon"} variant={"light-outline"}>
            <LuRocket />
          </Button>
          <Button size={"icon"} variant={"light-ghost"}>
            <LuRocket />
          </Button>
        </section>
      </DemoWrapper>
      <DemoWrapper title="Link buttons">
        <Button variant={"link"}>Light solid</Button>
      </DemoWrapper>

      <DemoWrapper title="Accordions">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>{" "}
      </DemoWrapper>
      <DemoWrapper title="Tooltip">
        <TooltipDemo />
      </DemoWrapper>
      <DemoWrapper title="Toggle Group">
        <ToggleGroupDemo />
      </DemoWrapper>
      <DemoWrapper title="Toggle">
        <ToggleDemo />
      </DemoWrapper>
      <DemoWrapper title="Toast">
        <ToastDemo />
      </DemoWrapper>
      <DemoWrapper title="Textarea">
        <TextareaDemo />
      </DemoWrapper>
      <DemoWrapper title="Tabs">
        <TabsDemo />
      </DemoWrapper>
      <DemoWrapper title="Table">
        <TableDemo />
      </DemoWrapper>
      <DemoWrapper title="Sonner">
        <SonnerDemo />
      </DemoWrapper>
      <DemoWrapper title="Slider">
        <SliderDemo />
      </DemoWrapper>
      <DemoWrapper title="Skeleton">
        <SkeletonDemo />
      </DemoWrapper>
      <DemoWrapper title="Sheet">
        <SheetDemo />
      </DemoWrapper>
      <DemoWrapper title="Select">
        <SelectDemo />
      </DemoWrapper>
      <DemoWrapper title="Scroll-area">
        <ScrollAreaDemo />
      </DemoWrapper>
      <DemoWrapper title="Resizable">
        <ResizableDemo />
      </DemoWrapper>
      <DemoWrapper title="Radio Group">
        <RadioGroupDemo />
      </DemoWrapper>
      <DemoWrapper title="Progress">
        <ProgressDemo />
      </DemoWrapper>
      <DemoWrapper title="Popover">
        <PopoverDemo />
      </DemoWrapper>
      <DemoWrapper title="Pagination">
        <PaginationDemo />
      </DemoWrapper>
      <DemoWrapper title="Navigation Menu">
        <NavigationMenuDemo />
      </DemoWrapper>
      <DemoWrapper title="Menubar">
        <MenubarDemo />
      </DemoWrapper>
      <DemoWrapper title="Hover Card">
        <HoverCardDemo />
      </DemoWrapper>
      <DemoWrapper title="Dropdown Menu">
        <DropdownMenuDemo />
      </DemoWrapper>
      <DemoWrapper title="Drawer">
        <DrawerDemo />
        <DrawerDialogDemo />
      </DemoWrapper>
      <DemoWrapper title="Dialog">
        <DialogDemo />
      </DemoWrapper>
      <DemoWrapper title="Table">
        <DataTableDemo />
      </DemoWrapper>
      <DemoWrapper title="Context Menu">
        <ContextMenuDemo />
      </DemoWrapper>
      <DemoWrapper title="Command">
        <CommandDialogDemo />
      </DemoWrapper>
      <DemoWrapper title="Combobox">
        <ComboboxDemo />
      </DemoWrapper>
      <DemoWrapper title="Collapsible">
        <CollapsibleDemo />
      </DemoWrapper>
      <DemoWrapper title="Form with Checkbox">
        <CheckboxReactHookFormMultiple />
      </DemoWrapper>
      <DemoWrapper title="Carousel">
        <CarouselDApiDemo />
      </DemoWrapper>
      <DemoWrapper title="Card">
        <CardDemo />
        <CardWithForm />
      </DemoWrapper>
      <DemoWrapper title="Calender">
        <CalendarForm />
      </DemoWrapper>
      <DemoWrapper title="Badges">
        <Badge>Badge</Badge>
        <Badge variant={"primary"}>Badge</Badge>
        <Badge variant={"outline"}>Badge</Badge>
      </DemoWrapper>
      <DemoWrapper title="Avatar">
        <Avatar>
          <AvatarImage src="https://github.com/modecode22.png" alt="@shadcn" />
          <AvatarFallback>TT</AvatarFallback>
        </Avatar>
      </DemoWrapper>
      <DemoWrapper title="Alert dialog">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="dark-outline" className="w-fit">
              Show Dialog
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </DemoWrapper>
      <DemoWrapper title="Alerts">
        <Alert>
          <LuRocket className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the cli.
          </AlertDescription>
        </Alert>
        <Alert variant={"error"}>
          <LuRocket className="h-4 w-4" />
          <AlertTitle>Error Alert!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the cli.
          </AlertDescription>
        </Alert>
        <Alert variant={"warning"}>
          <LuRocket className="h-4 w-4" />
          <AlertTitle>Error Alert!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the cli.
          </AlertDescription>
        </Alert>
        <Alert variant={"info"}>
          <LuRocket className="h-4 w-4" />
          <AlertTitle>Error Alert!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the cli.
          </AlertDescription>
        </Alert>{" "}
      </DemoWrapper>
    </section>
  );
}

export default TestComponent;
