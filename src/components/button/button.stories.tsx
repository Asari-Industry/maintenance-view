import type { Meta, StoryObj } from "@storybook/react";

import Button from "./button";

import "@/app/globals.css";

const meta = {
    title: "components/Button",
    component: Button,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    args: {
        href: "#",
        variation: "primary",
        className: "w-fit",
        children: "Button Text",
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        href: "#",
        variation: "primary",
        children: "Primary Button",
    },
};

export const Secondary: Story = {
    args: {
        href: "#",
        variation: "secondary",
        children: "Secondary Button",
    },
};
