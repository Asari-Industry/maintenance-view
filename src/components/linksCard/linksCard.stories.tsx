import type { Meta, StoryObj } from "@storybook/react";

import LinksCard from "./linksCard";

import "@/app/globals.css";

const meta: Meta<typeof LinksCard> = {
    title: "components/LinksCard",
    component: LinksCard,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};