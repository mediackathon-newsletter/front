import React from 'react';

const Idea = () => {
  return (
    <section className="section idea">
      <div className="box">
        <h1 className="title is-2">Boite à idées</h1>

			<form method="" className="">
				<div className="field">
					<label className="label">
						Soumettez des idées de sujet sur votre quartier et 
						gagnez des [points Membre] si votre sujet est choisi. 
					</label>
					<div className="control">
						<textarea className="textarea" placeholder="Saisissez vos suggestions"></textarea>
					</div>
				</div>
				<div className="field is-grouped">
					<div className="control">
						<button className="button is-link">Envoyer</button>
					</div>
				</div>
			</form>
		</div>
    </section>
	
  );
};

export default Idea;
