'use client';

import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { ReactNode, useState } from 'react';

type Cta = {
  label: string;
};

type ModalProps = {
  children: ReactNode;
  title?: ReactNode;
  cta?: Cta;
  onClose?: () => void;
};

export const Modal = ({ children, title, cta, onClose }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(true);

  function close() {
    if (onClose) {
      onClose();
    }
    setIsOpen(false);
  }

  return (
    <Transition appear show={isOpen}>
      <Dialog
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 transform-[scale(95%)]"
              enterTo="opacity-100 transform-[scale(100%)]"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 transform-[scale(100%)]"
              leaveTo="opacity-0 transform-[scale(95%)]"
            >
              <DialogPanel className="dark:bg-gray-100 w-full max-w-md rounded-xl p-6 backdrop-blur-2xl">
                <DialogTitle
                  as="h3"
                  className="text-base/7 font-medium text-white"
                >
                  {title}
                </DialogTitle>
                {children}
                {cta && (
                  <div className="mt-4">
                    <Button
                      className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                      onClick={close}
                    >
                      {cta?.label}
                    </Button>
                  </div>
                )}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
