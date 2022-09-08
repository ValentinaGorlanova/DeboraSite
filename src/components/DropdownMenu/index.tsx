/* eslint-disable react/prop-types */
import React, { ReactNode, useState } from "react";
import { styled, keyframes } from "@stitches/react";
import { violet, mauve } from "@radix-ui/colors";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const contentStyles = {
  minWidth: "325px",
  maxWidth: "325px",
  marginRight: "60px",
  backgroundColor: "#F7F7F7",
  borderRadius: "12px",
  padding: "16px 12px 16px 12px",
  boxShadow: "2px 2px 4px rgba(113, 173, 173, 0.11), 4px 4px 32px rgba(198, 216, 216, 0.5)",
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: "transform, opacity",
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
};

const StyledContent = styled(DropdownMenuPrimitive.Content, { ...contentStyles });

function Content({ children, ...props }: any) {
  return (
    <DropdownMenuPrimitive.Portal>
      <StyledContent {...props}>
        {children}
        {/* <StyledArrow /> */}
      </StyledContent>
    </DropdownMenuPrimitive.Portal>
  );
}

const StyledSubContent = styled(DropdownMenuPrimitive.SubContent, { ...contentStyles });

function SubContent(props: any) {
  return (
    <DropdownMenuPrimitive.Portal>
      <StyledSubContent {...props} />
    </DropdownMenuPrimitive.Portal>
  );
}

const itemStyles = {
  all: "unset",
  fontFamily: "Barlow",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "24px",
  color: "#1E1E1E",
  display: "flex",
  alignItems: "center",
  height: 25,
  padding: "0 5px",
  position: "relative",
  paddingLeft: 25,
  userSelect: "none",
  cursor: "pointer",
  "&[data-disabled]": {
    cursor: "default",
  },
};

const StyledItem = styled(DropdownMenuPrimitive.Item, { ...itemStyles });
const StyledCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, { ...itemStyles });
const StyledRadioItem = styled(DropdownMenuPrimitive.RadioItem, { ...itemStyles });
const StyledSubTrigger = styled(DropdownMenuPrimitive.SubTrigger, {
  '&[data-state="open"]': {
    backgroundColor: violet.violet4,
    color: violet.violet11,
  },
  ...itemStyles,
});

const StyledLabel = styled(DropdownMenuPrimitive.Label, {
  paddingLeft: 25,
  fontSize: 12,
  lineHeight: "25px",
  color: mauve.mauve11,
});

const StyledSeparator = styled(DropdownMenuPrimitive.Separator, {
  height: 1,
  backgroundColor: violet.violet6,
  margin: 5,
});

const StyledItemIndicator = styled(DropdownMenuPrimitive.ItemIndicator, {
  position: "absolute",
  left: 0,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

// Exports
export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuContent = Content;
export const DropdownMenuItem = StyledItem;
export const DropdownMenuCheckboxItem = StyledCheckboxItem;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
export const DropdownMenuRadioItem = StyledRadioItem;
export const DropdownMenuItemIndicator = StyledItemIndicator;
export const DropdownMenuLabel = StyledLabel;
export const DropdownMenuSeparator = StyledSeparator;
export const DropdownMenuSub = DropdownMenuPrimitive.Sub;
export const DropdownMenuSubTrigger = StyledSubTrigger;
export const DropdownMenuSubContent = SubContent;

// Your app...
const Box = styled("div", {});

const RightSlot = styled("div", {
  marginLeft: "auto",
  paddingLeft: 20,

  fontFamily: "Barlow",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "12px",
  lineHeight: "24px",
  textDecorationLine: "underline",
  color: "#1E1E1E",
  cursor: "pointer",
});

interface DropdownContent {
  children: ReactNode;
}

const TabsContainer = styled("div", {
  width: "100%",
  display: "flex",
  gap: "10px",
  borderBottom: "1px solid #D4D4D4",
});

const TabsItem = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  paddingBottom: "10px",
  marginTop: "10px",
  cursor: "pointer",
  ":first-child": {
    fontFamily: "Barlow",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "18px",
    color: "#B5B5B5",
  },

  variants: {
    border: {
      active: {
        borderBottom: "2px solid #E7975D",
        color: "#000000",
      },
    },
  },
});

const QuantityLabel = styled("span", {
  padding: "4px 8px",

  borderRadius: "4px",
  fontFamily: "Barlow",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "14px",
  lineHeight: "17px",
  color: "#F7F7F7",
  background: "#D4D4D4",
  variants: {
    background: {
      active: {
        background: "#E7975D",
      },
    },
  },
});

const ListItem = styled("li", {
  fontFamily: "Barlow",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "24px",
  color: "#1E1E1E",

  padding: "10px 0",
});

const Ul = styled("ul", {
  width: "100%",
  padding: "28px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",

  "li + li": {
    borderTop: "1px solid #e9e9e9",
  },
});
export function DropdownNotifications({ children }: DropdownContent) {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <Box>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>

        <DropdownMenuContent sideOffset={5}>
          <DropdownMenuItem disabled>
            Notificacoes <RightSlot>Marcar como lidas</RightSlot>
          </DropdownMenuItem>
          <TabsContainer>
            {activeTab === 1 ? (
              <TabsItem border="active" onClick={() => setActiveTab(1)}>
                <span>Todos</span>
                <QuantityLabel background="active">2</QuantityLabel>
              </TabsItem>
            ) : (
              <TabsItem onClick={() => setActiveTab(1)}>
                <span>Todos</span>
                <QuantityLabel>2</QuantityLabel>
              </TabsItem>
            )}

            {activeTab === 2 ? (
              <TabsItem border="active" onClick={() => setActiveTab(2)}>
                <span>Solicitacoes</span>
                <QuantityLabel background="active">2</QuantityLabel>
              </TabsItem>
            ) : (
              <TabsItem onClick={() => setActiveTab(2)}>
                <span>Solicitacoes</span>
                <QuantityLabel>2</QuantityLabel>
              </TabsItem>
            )}
            {activeTab === 3 ? (
              <TabsItem border="active" onClick={() => setActiveTab(3)}>
                <span>Status</span>
                <QuantityLabel background="active">2</QuantityLabel>
              </TabsItem>
            ) : (
              <TabsItem onClick={() => setActiveTab(3)}>
                <span>Status</span>
                <QuantityLabel>2</QuantityLabel>
              </TabsItem>
            )}
          </TabsContainer>
          <Ul>
            <ListItem>Uma nova solicitacao de consulta foi realizada</ListItem>
            <ListItem>Um paciente cancelou consulta</ListItem>
          </Ul>
        </DropdownMenuContent>
      </DropdownMenu>
    </Box>
  );
}
