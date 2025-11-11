"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send } from "lucide-react";
import { Textarea } from "../ui/textarea";

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
                <FieldLabel htmlFor="name">Full Name</FieldLabel>
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
        </form>
      </CardContent>
    </Card>
  );
}
