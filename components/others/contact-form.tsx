"use client";

import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { Select } from "../ui/select";
import { SelectContent, SelectTrigger, SelectValue } from "../ui/select";
import { SelectGroup, SelectItem, SelectLabel } from "../ui/select";

export default function ContactForm({
  ...props
}: React.ComponentProps<typeof Card>) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSelect = (value: string) => {
    setForm({ ...form, service: value });
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Message sent!");
    } else {
      alert("Something went wrong");
    }
  };

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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <FieldGroup>
            {/* name and company name */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
              <Field>
                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  required
                  className="bg-[#F3F3F5]"
                  onChange={handleChange}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="company">Company</FieldLabel>
                <Input
                  id="company"
                  type="text"
                  placeholder="Your company name"
                  required
                  className="bg-[#F3F3F5]"
                  onChange={handleChange}
                />
              </Field>
            </div>
            {/* email and phone number details */}
            {/* name and company name */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="John@gmail.com"
                  required
                  className="bg-[#F3F3F5]"
                  onChange={handleChange}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                <Input
                  id="phone"
                  type="number"
                  placeholder="(+1)-22-0-290"
                  required
                  className="bg-[#F3F3F5]"
                  onChange={handleChange}
                />
              </Field>
            </div>
            <div>
              <FieldLabel className="pb-3">Service of interest</FieldLabel>
              <Select onValueChange={handleSelect}>
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
                      Digital transformation
                    </SelectItem>
                    <SelectItem value="digital-transformation">
                      Other bespoke services
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <Field>
              <FieldLabel htmlFor="message">Message</FieldLabel>
              <Textarea
                id="message"
                placeholder="Your message"
                className="bg-[#f3f3f5]"
                onChange={handleChange}
              />
            </Field>
            <FieldGroup>
              <Field>
                <Button
                  className="bg-[#f97316] hover:bg-orange-500 hover:text-white flex items-center gap-3"
                  type="submit"
                >
                  <Send />
                  <span>Send Message</span>
                </Button>
              </Field>
            </FieldGroup>
          </FieldGroup>
          <div>
            <p className="mt-6 text-[#717182] text-center">
              Your data is secure and will not be shared with third parties.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
