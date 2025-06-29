
import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Pressable, View } from "react-native";
import OutsidePressHandler from "react-native-outside-press";
import { twMerge } from "tailwind-merge";

export interface DropdownHandle {
  openDropdown: () => void;
  closeDropdown: () => void;
  toggleDropdown: () => void;
  isOpen: boolean;
}

export interface DropdownProps {
  trigger: (open: boolean) => React.ReactNode;
  children: React.ReactNode;
  onOpen?: () => void;
  onClose?: () => void;
  dropdownClassName?: string;
  containerClassName?: string;
}

const Dropdown = forwardRef<DropdownHandle, DropdownProps>(
  ({ trigger, children, onOpen, onClose, dropdownClassName, containerClassName }, ref) => {
    const [open, setOpen] = useState(false);
    const openDropdown = () => { setOpen(true); onOpen?.(); };
    const closeDropdown = () => { setOpen(false); onClose?.(); };
    const toggleDropdown = () => {
      setOpen(o => {
        const n = !o;
        n ? onOpen?.() : onClose?.();
        return n;
      });
    };

    useImperativeHandle(ref, () => ({
      openDropdown,
      closeDropdown,
      toggleDropdown,
      isOpen: open
    }), [open]);

    return (
          <View className={twMerge('relative',containerClassName)} style={{zIndex:1000}}> 
            <OutsidePressHandler onOutsidePress={open ? closeDropdown : () => {}}>
                    <Pressable onPress={toggleDropdown}>
                      {trigger(open)}
                    </Pressable>
                    {open && (
                      <View 
                        className={twMerge("absolute top-full right-0 mt-1 bg-background border border-border rounded-lg shadow-lg max-h-60", dropdownClassName)}
                      >   
                        {children}
                      </View>
                    )}
            </OutsidePressHandler>
          </View>
    );
  }
);

export default Dropdown;
