"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send } from "lucide-react";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from "../ui/select"; // prettier-ignore

export default function ContactForm({
  ...props
}: React.ComponentProps<typeof Card>) {
  // the logic for sending message goes here

  // prolly use a function that sends the message to the mail of the account

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>
          <div className="flex items-center gap-2">
            <MessageCircle color={"#f97316"} />
            <p>Free Consultation</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            {/* name and company name */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
              <Field>
                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                <Input
                  id="full-name"
                  type="text"
                  placeholder="Your full name"
                  required
                  className="bg-[#F3F3F5]"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="name">Company</FieldLabel>
                <Input
                  id="company-name"
                  type="text"
                  placeholder="Your company name"
                  required
                  className="bg-[#F3F3F5]"
                />
              </Field>
            </div>
            {/* email and phone number details */}
            {/* name and company name */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
              <Field>
                <FieldLabel htmlFor="name">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="John@gmail.com"
                  required
                  className="bg-[#F3F3F5]"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="name">Phone Number</FieldLabel>
                <Input
                  id="company-name"
                  type="number"
                  placeholder="(+1)-22-0-290"
                  required
                  className="bg-[#F3F3F5]"
                />
              </Field>
            </div>
            <div>
              <FieldLabel className="pb-3">Service of interest</FieldLabel>
              <Select>
                <SelectTrigger className="w-full cursor-pointer bg-[#F3F3F5]">
                  <SelectValue placeholder="Service of interest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Services</SelectLabel>
                    <SelectItem value="tax-planning">Tax planning</SelectItem>
                    <SelectItem value="book-keeping">Book keeping</SelectItem>
                    <SelectItem value="accounting">Accounting</SelectItem>
                    <SelectItem value="finance">
                      Out sourced finance team
                    </SelectItem>
                    <SelectItem value="management-account">
                      Management accounts
                    </SelectItem>
                    <SelectItem value="digital-transformation">
                      Digital Transformation
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <Field>
              <FieldLabel htmlFor="message">Message</FieldLabel>
              <Textarea placeholder="Your message" className="bg-[#f3f3f5]" />
            </Field>
            <FieldGroup>
              <Field>
                <Button
                  className="bg-[#f97316] hover:bg-orange-500 hover:text-white flex items-center gap-3"
                  type="button"
                >
                  <Send />
                  <span>Send Message</span>
                </Button>
              </Field>
            </FieldGroup>
          </FieldGroup>
          <div>
            <p className="mt-6 text-[#717182]">
              Your data is secure and will not be shared with third parties.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
