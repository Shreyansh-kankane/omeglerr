
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { useModal } from '@/hooks/use-modal-store';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TermsModal() {
  const router = useRouter();
  const { isOpen, onClose, type ,data} = useModal();
  const isModalOpen = isOpen && type === 'terms';


  const [firstchecked, setFirstChecked] = useState<Boolean>(false);
  const [secondChecked, setSecondChecked] = useState<Boolean>(false);

  const handleClose = () => {
    onClose();
  };

  const handleAgree = () => {
    
    if(firstchecked && secondChecked){
      if(data == 'vichat')
        router.push(`/${data}`);
      else if(data == 'text') {
        router.push(`/text`);
      }
      onClose();
    }
  }

  return (
    <Dialog open={isModalOpen} onClose={handleClose} aria-labelledby="terms-dialog-title">
      <DialogTitle id="terms-dialog-title">Terms and Conditions</DialogTitle>
      <DialogContent>
        {/* Add your terms and conditions content here */}
        <div className=''>
             <p className=''><input type="checkbox" style={{width: "15px", height: "15px"}}  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFirstChecked(event.target.checked)} /> By checking the box you acknowledge that you have 
            reviewed and agree to the Omeglerr <Link href="/terms" style={{textDecoration:'underline',color:'blue'}}>Terms of Service</Link>, <Link href="/privacy" style={{textDecoration:'underline',color:'blue'}}>Privacy Policy</Link>
           </p>
        </div>

        <div className='mt-2'>
           <p><input type="checkbox"style={{width: "15px", height: "15px"}} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSecondChecked(event.target.checked)}/> You must be 18+ or 13+ to use Omeglerr If you are between 13 and 18 years of age, you may only
            use Omeglerr with the permission and your legal guardian
            . Persions under the age of 13 <span className='font-bold'>may not</span> use Omegler. See our <Link className='text-blue-800 underline' href="/terms" style={{textDecoration:'underline',color:'blue'}}>Terms of Service</Link> for more info. 
            <span className='font-bold'>By checking the box you acknowledge and represent thatyou comply with these age restrictions</span> <a href="">Privacy Policy</a> and <a href="">Community Guidelines</a>.
           </p>
        </div>
        {/* Add more content as needed */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
        <Button onClick={handleAgree} 
          disabled={!(firstchecked && secondChecked)}
          color="primary">
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}
