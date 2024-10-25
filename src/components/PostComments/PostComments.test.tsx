import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByTestId('btn-comentar')).toBeInTheDocument();
    }); 
    describe('Teste para o componente PostComments', () => {
        it('Deve renderizar o botão de comentário', () => {
            render(<PostComment />);
            expect(screen.getByTestId('btn-comentar')).toBeInTheDocument();
        });
    
        it('Deverá add dois comentários ao enviar o formulário', () => {
            render(<PostComment />);
    
            fireEvent.change(screen.getByTestId('campo-comentário'), { target: { value: 'Primeiro comentário' } });
            fireEvent.click(screen.getByTestId('btn-comentar'));
    
            fireEvent.change(screen.getByTestId('campo-comentário'), { target: { value: 'Segundo comentário' } });
            fireEvent.click(screen.getByTestId('btn-comentar'));
    
            expect(screen.getByTestId('comment-0')).toHaveTextContent('Primeiro comentário');
            expect(screen.getByTestId('comment-1')).toHaveTextContent('Segundo comentário');
        });
    });
});